import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as fc from 'fast-check';
import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { tools } from '@/config/tools';
import { locales } from '@/lib/i18n/config';
import { ToolCard } from '@/components/tools/ToolCard';

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    React.createElement('a', { href, ...props }, children),
}));

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  usePathname: () => '/en/tools',
}));

describe('Tool Component Property Tests', () => {
  beforeEach(() => {
    cleanup();
  });
  /**
   * **Feature: nextjs-pdf-toolkit, Property 3: Tool Card Rendering**
   * **Validates: Requirements 2.5**
   * 
   * For any tool in the tools configuration, rendering its card component 
   * SHALL produce output containing the tool's icon, name, and description.
   */
  describe('Property 3: Tool Card Rendering', () => {
    it('every tool card contains icon, name, and description', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          fc.constantFrom(...locales),
          (tool, locale) => {
            const { unmount } = render(<ToolCard tool={tool} locale={locale} />);
            
            // Tool card should be rendered
            const toolCard = screen.getByTestId('tool-card');
            expect(toolCard).toBeInTheDocument();
            
            // Icon should be present
            const iconElement = screen.getByTestId('tool-card-icon');
            expect(iconElement).toBeInTheDocument();
            
            // Name should be present and contain the tool name
            const nameElement = screen.getByTestId('tool-card-name');
            expect(nameElement).toBeInTheDocument();
            expect(nameElement.textContent).toBeTruthy();
            
            // Description should be present
            const descriptionElement = screen.getByTestId('tool-card-description');
            expect(descriptionElement).toBeInTheDocument();
            expect(descriptionElement.textContent).toBeTruthy();
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool card name is derived from tool ID', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const { unmount } = render(<ToolCard tool={tool} locale="en" />);
            
            const nameElement = screen.getByTestId('tool-card-name');
            const expectedName = tool.id
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            
            expect(nameElement.textContent).toBe(expectedName);
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool card links to correct tool page URL', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          fc.constantFrom(...locales),
          (tool, locale) => {
            const { unmount } = render(<ToolCard tool={tool} locale={locale} />);
            
            const linkElement = screen.getByTestId('tool-card');
            const expectedUrl = `/${locale}/tools/${tool.slug}`;
            
            expect(linkElement).toHaveAttribute('href', expectedUrl);
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool card icon has correct data attribute', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const { unmount } = render(<ToolCard tool={tool} locale="en" />);
            
            const iconElement = screen.getByTestId('tool-card-icon');
            const svgElement = iconElement.querySelector('svg');
            
            expect(svgElement).toBeInTheDocument();
            expect(svgElement).toHaveAttribute('data-icon', tool.icon);
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool card description is derived from features', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const { unmount } = render(<ToolCard tool={tool} locale="en" />);
            
            const descriptionElement = screen.getByTestId('tool-card-description');
            const description = descriptionElement.textContent || '';
            
            // Description should contain at least one feature (formatted)
            const hasFeatureContent = tool.features.some(feature => {
              const formattedFeature = feature.replace(/-/g, ' ');
              return description.toLowerCase().includes(formattedFeature.toLowerCase());
            });
            
            expect(hasFeatureContent).toBe(true);
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});


import { ToolPage } from '@/components/tools/ToolPage';
import { ToolContent, HowToStep, UseCase, FAQ } from '@/types/tool';

/**
 * Generate valid tool content for testing
 * Creates content that meets the minimum requirements
 */
function generateValidToolContent(tool: typeof tools[0]): ToolContent {
  const toolName = tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const howToUse: HowToStep[] = [
    { step: 1, title: 'Upload your file', description: 'Select or drag and drop your PDF file' },
    { step: 2, title: 'Configure options', description: 'Adjust settings as needed' },
    { step: 3, title: 'Process', description: 'Click the process button to start' },
    { step: 4, title: 'Download', description: 'Download your processed file' },
  ];

  const useCases: UseCase[] = [
    { title: 'Business Documents', description: 'Process business documents efficiently', icon: 'briefcase' },
    { title: 'Academic Papers', description: 'Handle academic and research papers', icon: 'book' },
    { title: 'Personal Files', description: 'Manage personal PDF files', icon: 'user' },
  ];

  const faq: FAQ[] = [
    { question: 'Is this tool free?', answer: 'Yes, this tool is completely free to use.' },
    { question: 'Is my data secure?', answer: 'All processing happens in your browser. Files never leave your device.' },
    { question: 'What file formats are supported?', answer: `This tool supports ${tool.acceptedFormats.join(', ')} files.` },
  ];

  return {
    title: toolName,
    metaDescription: `${toolName} - Process your PDF files easily and securely`,
    keywords: [tool.id, 'pdf', 'tool', ...tool.features.slice(0, 3)],
    description: `<p>${toolName} is a powerful tool for processing PDF files. ${tool.features.map(f => f.replace(/-/g, ' ')).join(', ')}.</p>`,
    howToUse,
    useCases,
    faq,
  };
}

describe('Tool Page Property Tests', () => {
  beforeEach(() => {
    cleanup();
  });
  /**
   * **Feature: nextjs-pdf-toolkit, Property 7: Tool Page Content Completeness**
   * **Validates: Requirements 4.2, 4.3, 4.4, 4.5, 12.1-12.5**
   * 
   * For any tool page, the rendered content SHALL include: a description section, 
   * a how-to-use section with at least 3 steps, a use-cases section with at least 
   * 3 scenarios, and an FAQ section with at least 3 questions.
   */
  describe('Property 7: Tool Page Content Completeness', () => {
    it('tool page contains all required sections with minimum content', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          fc.constantFrom(...locales),
          (tool, locale) => {
            const content = generateValidToolContent(tool);
            const { unmount } = render(
              <ToolPage tool={tool} content={content} locale={locale}>
                <div data-testid="tool-interface">Tool Interface</div>
              </ToolPage>
            );
            
            // Tool page should be rendered
            const toolPage = screen.getByTestId('tool-page');
            expect(toolPage).toBeInTheDocument();
            
            // Header section should be present
            const header = screen.getByTestId('tool-page-header');
            expect(header).toBeInTheDocument();
            
            // Description section should be present
            const description = screen.getByTestId('tool-page-description');
            expect(description).toBeInTheDocument();
            
            // How-to-use section should be present with at least 3 steps
            const howToUse = screen.getByTestId('tool-page-how-to-use');
            expect(howToUse).toBeInTheDocument();
            const steps = screen.getByTestId('how-to-use-steps');
            expect(steps.children.length).toBeGreaterThanOrEqual(3);
            
            // Use cases section should be present with at least 3 scenarios
            const useCases = screen.getByTestId('tool-page-use-cases');
            expect(useCases).toBeInTheDocument();
            const useCasesGrid = screen.getByTestId('use-cases-grid');
            expect(useCasesGrid.children.length).toBeGreaterThanOrEqual(3);
            
            // FAQ section should be present with at least 3 questions
            const faq = screen.getByTestId('tool-page-faq');
            expect(faq).toBeInTheDocument();
            const faqList = screen.getByTestId('faq-list');
            expect(faqList.children.length).toBeGreaterThanOrEqual(3);
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool page header displays correct title', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const content = generateValidToolContent(tool);
            const { unmount } = render(
              <ToolPage tool={tool} content={content} locale="en">
                <div>Interface</div>
              </ToolPage>
            );
            
            const title = screen.getByTestId('tool-page-title');
            expect(title.textContent).toBe(content.title);
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool page includes related tools section', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const content = generateValidToolContent(tool);
            const { unmount } = render(
              <ToolPage tool={tool} content={content} locale="en">
                <div>Interface</div>
              </ToolPage>
            );
            
            // Related tools section should be present (all tools have at least 2 related tools)
            const relatedTools = screen.getByTestId('tool-page-related-tools');
            expect(relatedTools).toBeInTheDocument();
            
            const relatedToolsGrid = screen.getByTestId('related-tools-grid');
            expect(relatedToolsGrid.children.length).toBeGreaterThanOrEqual(2);
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool page how-to steps are numbered correctly', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const content = generateValidToolContent(tool);
            const { unmount } = render(
              <ToolPage tool={tool} content={content} locale="en">
                <div>Interface</div>
              </ToolPage>
            );
            
            // Check each step is numbered correctly
            content.howToUse.forEach((step, index) => {
              const stepElement = screen.getByTestId(`how-to-step-${step.step}`);
              expect(stepElement).toBeInTheDocument();
            });
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool page renders tool interface area', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const content = generateValidToolContent(tool);
            const { unmount } = render(
              <ToolPage tool={tool} content={content} locale="en">
                <div data-testid="custom-tool-interface">Custom Interface</div>
              </ToolPage>
            );
            
            // Tool interface area should be present
            const interfaceArea = screen.getByTestId('tool-page-interface');
            expect(interfaceArea).toBeInTheDocument();
            
            // Custom children should be rendered
            const customInterface = screen.getByTestId('custom-tool-interface');
            expect(customInterface).toBeInTheDocument();
            
            unmount();
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
