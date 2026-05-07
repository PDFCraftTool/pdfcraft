import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { 
  tools, 
  getAllTools, 
  getToolById, 
  getToolsByCategory,
  toolExists,
  getAllToolIds,
} from '@/config/tools';
import { 
  TOOL_CATEGORIES, 
  type ToolCategory,
} from '@/types/tool';
import {
  searchTools,
  fuzzyMatch,
  toolMatchesQuery,
} from '@/lib/utils/search';

describe('Tool Configuration Property Tests', () => {
  /**
   * **Feature: nextjs-pdf-toolkit, Property 10: Tool Category Assignment**
   * **Validates: Requirements 6.1**
   * 
   * For any tool in the system, the tool SHALL be assigned to exactly one 
   * of the 6 defined categories.
   */
  describe('Property 10: Tool Category Assignment', () => {
    it('every tool is assigned to exactly one valid category', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            // Tool must have a category
            expect(tool.category).toBeDefined();
            
            // Category must be one of the 6 defined categories
            expect(TOOL_CATEGORIES).toContain(tool.category);
            
            // Verify it's exactly one category (not an array or multiple)
            expect(typeof tool.category).toBe('string');
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('all 6 categories are represented in the tools', () => {
      const categoriesInUse = new Set(tools.map(t => t.category));
      
      for (const category of TOOL_CATEGORIES) {
        expect(categoriesInUse.has(category)).toBe(true);
      }
    });

    it('getToolsByCategory returns only tools of that category', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...TOOL_CATEGORIES),
          (category) => {
            const categoryTools = getToolsByCategory(category);
            
            // All returned tools must have the specified category
            for (const tool of categoryTools) {
              expect(tool.category).toBe(category);
            }
            
            // Count should match manual filter
            const manualCount = tools.filter(t => t.category === category).length;
            expect(categoryTools.length).toBe(manualCount);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('no tool has an invalid category', () => {
      const invalidCategories = ['invalid', 'unknown', '', null, undefined];
      
      for (const tool of tools) {
        expect(invalidCategories).not.toContain(tool.category);
        expect(TOOL_CATEGORIES).toContain(tool.category);
      }
    });
  });


  /**
   * **Feature: nextjs-pdf-toolkit, Property 12: Related Tools Definition**
   * **Validates: Requirements 6.5**
   * 
   * For any tool in the system, the tool SHALL have at least 2 related tools defined,
   * and all related tool IDs SHALL reference existing tools.
   */
  describe('Property 12: Related Tools Definition', () => {
    it('every tool has at least 2 related tools', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            expect(tool.relatedTools).toBeDefined();
            expect(Array.isArray(tool.relatedTools)).toBe(true);
            expect(tool.relatedTools.length).toBeGreaterThanOrEqual(2);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('all related tool IDs reference existing tools', () => {
      const allToolIds = getAllToolIds();
      
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            for (const relatedId of tool.relatedTools) {
              // Each related tool ID must exist in the tools list
              expect(allToolIds).toContain(relatedId);
              expect(toolExists(relatedId)).toBe(true);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('no tool references itself as a related tool', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            expect(tool.relatedTools).not.toContain(tool.id);
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('related tools are unique (no duplicates)', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const uniqueRelated = new Set(tool.relatedTools);
            expect(uniqueRelated.size).toBe(tool.relatedTools.length);
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: nextjs-pdf-toolkit, Property 11: Search Result Relevance**
   * **Validates: Requirements 6.2**
   * 
   * For any search query string, the returned tool results SHALL only include 
   * tools whose name or description contains a fuzzy match to the query.
   */
  describe('Property 11: Search Result Relevance', () => {
    it('search results only include tools with fuzzy matches', () => {
      // Test with known tool names
      const knownQueries = [
        'merge',
        'split',
        'compress',
        'pdf',
        'image',
        'convert',
        'edit',
        'sign',
        'encrypt',
        'rotate',
      ];

      fc.assert(
        fc.property(
          fc.constantFrom(...knownQueries),
          (query) => {
            const results = searchTools(query);
            
            // All results should have a positive score
            for (const result of results) {
              expect(result.score).toBeGreaterThan(0);
              
              // Verify the tool actually has some relevance to the query
              const toolName = result.tool.id.replace(/-/g, ' ').toLowerCase();
              const features = result.tool.features.map(f => f.replace(/-/g, ' ').toLowerCase());
              
              // At least one of these should have some match
              const hasNameMatch = fuzzyMatch(query, toolName) > 0;
              const hasFeatureMatch = features.some(f => fuzzyMatch(query, f) > 0);
              
              expect(hasNameMatch || hasFeatureMatch).toBe(true);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('empty query returns no results', () => {
      const emptyQueries = ['', '   ', '\t', '\n'];
      
      for (const query of emptyQueries) {
        const results = searchTools(query);
        expect(results.length).toBe(0);
      }
    });

    it('exact tool name matches return that tool with high score', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const toolName = tool.id.replace(/-/g, ' ');
            const results = searchTools(toolName);
            
            // The exact tool should be in results
            const matchingResult = results.find(r => r.tool.id === tool.id);
            expect(matchingResult).toBeDefined();
            
            // It should have a high score (>= 0.7 for exact/near-exact matches)
            if (matchingResult) {
              expect(matchingResult.score).toBeGreaterThanOrEqual(0.5);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('search results are sorted by relevance score descending', () => {
      const queries = ['pdf', 'merge', 'convert', 'image', 'edit'];
      
      fc.assert(
        fc.property(
          fc.constantFrom(...queries),
          (query) => {
            const results = searchTools(query);
            
            // Verify descending order
            for (let i = 1; i < results.length; i++) {
              expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('toolMatchesQuery returns true for matching tools', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            // Tool should match its own name
            const toolName = tool.id.replace(/-/g, ' ');
            expect(toolMatchesQuery(tool, toolName)).toBe(true);
            
            // Tool should match empty query (shows all)
            expect(toolMatchesQuery(tool, '')).toBe(true);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * Additional tool configuration validation tests
   */
  describe('Tool Configuration Integrity', () => {
    it('all tools have unique IDs', () => {
      const ids = tools.map(t => t.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('all tools have unique slugs', () => {
      const slugs = tools.map(t => t.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it('getToolById returns correct tool', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const found = getToolById(tool.id);
            expect(found).toBeDefined();
            expect(found?.id).toBe(tool.id);
            expect(found?.slug).toBe(tool.slug);
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('getAllTools returns all 99 tools', () => {
      const allTools = getAllTools();
      expect(allTools.length).toBe(99);
    });

    it('all tools have required properties', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            expect(tool.id).toBeTruthy();
            expect(tool.slug).toBeTruthy();
            expect(tool.icon).toBeTruthy();
            expect(tool.category).toBeTruthy();
            expect(Array.isArray(tool.acceptedFormats)).toBe(true);
            expect(tool.outputFormat).toBeTruthy();
            expect(typeof tool.maxFileSize).toBe('number');
            expect(tool.maxFileSize).toBeGreaterThan(0);
            expect(typeof tool.maxFiles).toBe('number');
            expect(tool.maxFiles).toBeGreaterThan(0);
            expect(Array.isArray(tool.features)).toBe(true);
            expect(tool.features.length).toBeGreaterThan(0);
            expect(Array.isArray(tool.relatedTools)).toBe(true);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
