'use client';

import React from 'react';
import {
  ShieldAlert,
  Search,
  EyeOff,
  Key,
  FileCheck2,
  Lock,
  Anchor,
  Sparkles,
} from 'lucide-react';

interface SecurityToolOptionsProps {
  toolId: string;
  options: Record<string, any>;
  onChange: (key: string, value: any) => void;
  totalPages?: number;
  locale?: string;
}

export function SecurityToolOptions({
  toolId,
  options,
  onChange,
  totalPages = 1,
  locale = 'en',
}: SecurityToolOptionsProps) {
  const validLocale = (locale as string) || 'en';
  const isZh = validLocale.toLowerCase().startsWith('zh');

  switch (toolId) {
    case 'sanitize-pdf':
    case 'deep-sanitize': {
      const removeJavaScript = options.removeJavaScript ?? true;
      const removeAttachments = options.removeAttachments ?? true;
      const removeLinks = options.removeLinks ?? true;
      const flattenForms = options.flattenForms ?? true;
      const removeMetadata = options.removeMetadata ?? true;
      const removeAnnotations = options.removeAnnotations ?? false;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '安全深度脱敏项勾选' : 'Sanitization Scope'}
            </label>
            <div className="space-y-2 text-xs">
              {[
                { key: 'removeJavaScript', label: isZh ? '剔除所有可执行 JavaScript 脚本' : 'Remove JavaScript Scripts', val: removeJavaScript },
                { key: 'removeAttachments', label: isZh ? '剥离嵌入的内嵌文件附件' : 'Remove Embedded Attachments', val: removeAttachments },
                { key: 'removeLinks', label: isZh ? '清除所有外部跳转超链接' : 'Remove External Hyperlinks', val: removeLinks },
                { key: 'flattenForms', label: isZh ? '展平交互式表单字段为静态文本' : 'Flatten Form Fields', val: flattenForms },
                { key: 'removeMetadata', label: isZh ? '抹除隐藏的文档元数据与编辑历史' : 'Purge Metadata & History', val: removeMetadata },
                { key: 'removeAnnotations', label: isZh ? '清除批注与隐藏图层' : 'Strip Annotations & Hidden OCG', val: removeAnnotations },
              ].map((item) => (
                <label key={item.key} className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer">
                  <span>{item.label}</span>
                  <input
                    type="checkbox"
                    checked={item.val}
                    onChange={(e) => onChange(item.key, e.target.checked)}
                    className="w-4 h-4 rounded text-primary"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      );
    }

    case 'find-and-redact':
    case 'redact-pdf': {
      const searchTermsInput = options.searchTermsInput || '';
      const caseSensitive = options.caseSensitive ?? false;
      const wholeWord = options.wholeWord ?? false;
      const useRegex = options.useRegex ?? false;
      const redactionColor = options.redactionColor || '#000000';
      const replacementText = options.replacementText || '';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '搜索与永久遮盖 (脱敏)' : 'Search & Redact'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">
                {isZh ? '要遮盖的关键词 (逗号分隔)' : 'Keywords to Redact'}
              </label>
              <input
                type="text"
                value={searchTermsInput}
                onChange={(e) => onChange('searchTermsInput', e.target.value)}
                placeholder={isZh ? '例如: 绝密, 密码, 身份证号' : 'e.g. Secret, Password, SSN'}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs pt-1">
              {[
                { key: 'caseSensitive', label: isZh ? '大小写敏感' : 'Match Case', val: caseSensitive },
                { key: 'wholeWord', label: isZh ? '整词匹配' : 'Whole Word', val: wholeWord },
                { key: 'useRegex', label: isZh ? '正则表达式' : 'Regex Mode', val: useRegex },
              ].map((m) => (
                <label key={m.key} className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={m.val}
                    onChange={(e) => onChange(m.key, e.target.checked)}
                    className="w-3.5 h-3.5 rounded text-primary"
                  />
                  <span className="text-[11px]">{m.label}</span>
                </label>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs pt-2">
              <span>{isZh ? '遮盖色条颜色' : 'Redaction Color'}</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={redactionColor}
                  onChange={(e) => onChange('redactionColor', e.target.value)}
                  className="w-7 h-7 rounded border border-border cursor-pointer p-0.5"
                />
                <span className="font-mono text-muted-foreground">{redactionColor}</span>
              </div>
            </div>
            <div className="space-y-1.5 pt-1">
              <label className="text-xs text-muted-foreground">{isZh ? '覆盖印文字 (可选)' : 'Overlay Text (Optional)'}</label>
              <input
                type="text"
                value={replacementText}
                onChange={(e) => onChange('replacementText', e.target.value)}
                placeholder={isZh ? '留空为纯色遮挡，或填 [已脱敏]' : 'Leave blank or [REDACTED]'}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-border bg-background"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'smart-data-redactor': {
      const idRedact = options.idRedact ?? true;
      const phoneRedact = options.phoneRedact ?? true;
      const emailRedact = options.emailRedact ?? true;
      const customKeywords = options.customKeywords || '';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '智能敏感隐私数据自动脱敏' : 'Smart Privacy Redactor'}
            </label>
            <div className="space-y-2 text-xs">
              {[
                { key: 'idRedact', label: isZh ? '居民身份证号 / 驾照编号' : 'National ID / SSN', val: idRedact },
                { key: 'phoneRedact', label: isZh ? '11 位手机号码及固话' : 'Phone Numbers', val: phoneRedact },
                { key: 'emailRedact', label: isZh ? '电子邮箱地址 (Email)' : 'Email Addresses', val: emailRedact },
              ].map((item) => (
                <label key={item.key} className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer">
                  <span>{item.label}</span>
                  <input
                    type="checkbox"
                    checked={item.val}
                    onChange={(e) => onChange(item.key, e.target.checked)}
                    className="w-4 h-4 rounded text-primary"
                  />
                </label>
              ))}
            </div>
            <div className="space-y-1.5 pt-2">
              <label className="text-xs text-muted-foreground">{isZh ? '追加自定义脱敏词' : 'Additional Keywords'}</label>
              <input
                type="text"
                value={customKeywords}
                onChange={(e) => onChange('customKeywords', e.target.value)}
                placeholder={isZh ? '逗号分隔关键词' : 'Comma separated'}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-border bg-background"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'change-permissions': {
      const allowPrinting = options.allowPrinting ?? true;
      const allowCopying = options.allowCopying ?? false;
      const allowModifying = options.allowModifying ?? false;
      const allowAnnotating = options.allowAnnotating ?? false;
      const ownerPassword = options.ownerPassword || '';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? 'PDF 权限细粒度配置' : 'Security Permissions'}
            </label>
            <div className="space-y-2 text-xs">
              {[
                { key: 'allowPrinting', label: isZh ? '允许打印文档' : 'Allow Printing', val: allowPrinting },
                { key: 'allowCopying', label: isZh ? '允许复制文本与图片' : 'Allow Copying Content', val: allowCopying },
                { key: 'allowModifying', label: isZh ? '允许修改页面结构' : 'Allow Page Modifying', val: allowModifying },
                { key: 'allowAnnotating', label: isZh ? '允许添加批注与图章' : 'Allow Annotating & Signing', val: allowAnnotating },
              ].map((p) => (
                <label key={p.key} className="flex items-center justify-between p-2 rounded-lg border border-border/50 hover:bg-muted/40 cursor-pointer">
                  <span>{p.label}</span>
                  <input
                    type="checkbox"
                    checked={p.val}
                    onChange={(e) => onChange(p.key, e.target.checked)}
                    className="w-4 h-4 rounded text-primary"
                  />
                </label>
              ))}
            </div>
            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-medium text-foreground">{isZh ? '所有者保护密码 (必须设置)' : 'Owner Master Password'}</label>
              <input
                type="password"
                value={ownerPassword}
                onChange={(e) => onChange('ownerPassword', e.target.value)}
                placeholder={isZh ? '用于锁定上述权限的密码' : 'Password to enforce permissions'}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'digital-sign-pdf': {
      const reason = options.reason || (isZh ? '我已仔细审核并签署此文档' : 'I have reviewed and approved');
      const location = options.location || '';
      const contactInfo = options.contactInfo || '';
      const enableVisible = options.enableVisible ?? true;
      const sigPage = options.sigPage ?? 1;

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '数字证书签署参数' : 'Digital Signature Parameters'}
            </label>
            <div className="space-y-2 text-xs">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '签署缘由 (Reason)' : 'Sign Reason'}</label>
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => onChange('reason', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '签署地点 (Location)' : 'Sign Location'}</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => onChange('location', e.target.value)}
                  placeholder={isZh ? '例如: 深圳 / 线上签署' : 'e.g. London / Online'}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '签署人联系方式' : 'Contact Info'}</label>
                <input
                  type="text"
                  value={contactInfo}
                  onChange={(e) => onChange('contactInfo', e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div className="pt-2 flex items-center justify-between">
                <span>{isZh ? '在页面生成可视化签名印戳' : 'Add Visible Signature Stamp'}</span>
                <input
                  type="checkbox"
                  checked={enableVisible}
                  onChange={(e) => onChange('enableVisible', e.target.checked)}
                  className="w-4 h-4 rounded text-primary"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'cert-cryptor': {
      const sealPos = options.sealPos || 'bottom-right';
      const waxColor = options.waxColor || 'red';

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '电子火漆与证书加密' : 'Cert Cryptor & Wax Seal'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">{isZh ? '火漆印章颜色' : 'Seal Color'}</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'red', label: isZh ? '朱砂红' : 'Vermilion' },
                  { id: 'gold', label: isZh ? '烫金色' : 'Gold' },
                  { id: 'blue', label: isZh ? '青黛蓝' : 'Sapphire' },
                ].map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => onChange('waxColor', w.id)}
                    className={`py-1.5 px-2 text-xs rounded-lg border text-center ${
                      waxColor === w.id
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-border/60 hover:bg-muted/50'
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <label className="text-xs text-muted-foreground">{isZh ? '印章加盖位置' : 'Seal Position'}</label>
              <select
                value={sealPos}
                onChange={(e) => onChange('sealPos', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-border bg-background"
              >
                <option value="bottom-right">{isZh ? '右下角' : 'Bottom Right'}</option>
                <option value="top-right">{isZh ? '右上角' : 'Top Right'}</option>
                <option value="center">{isZh ? '页面中央' : 'Center'}</option>
              </select>
            </div>
          </div>
        </div>
      );
    }

    case 'pdf-signature-anchor-helper': {
      const pageNumber = options.pageNumber ?? 1;
      const anchorX = options.anchorX ?? 0.8;
      const anchorY = options.anchorY ?? 0.8;
      const anchorLabel = options.anchorLabel || (isZh ? '签署人请在此处签名' : 'Sign Here');

      return (
        <div className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              {isZh ? '签名位置锚点提示框' : 'Signature Anchor Helper'}
            </label>
            <div className="space-y-1.5">
              <label className="text-xs text-foreground font-medium">{isZh ? '锚点引导提示语' : 'Anchor Label'}</label>
              <input
                type="text"
                value={anchorLabel}
                onChange={(e) => onChange('anchorLabel', e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs pt-1">
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '目标页码' : 'Page'}</label>
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={pageNumber}
                  onChange={(e) => onChange('pageNumber', parseInt(e.target.value) || 1)}
                  className="w-full px-2 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '横向位置 X' : 'Anchor X'}</label>
                <input
                  type="number"
                  step="0.05"
                  min="0"
                  max="1"
                  value={anchorX}
                  onChange={(e) => onChange('anchorX', parseFloat(e.target.value) || 0.8)}
                  className="w-full px-2 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">{isZh ? '纵向位置 Y' : 'Anchor Y'}</label>
                <input
                  type="number"
                  step="0.05"
                  min="0"
                  max="1"
                  value={anchorY}
                  onChange={(e) => onChange('anchorY', parseFloat(e.target.value) || 0.8)}
                  className="w-full px-2 py-1.5 rounded-lg border border-border bg-background"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
