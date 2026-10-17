'use client';

import React, { useState, useCallback, useRef } from 'react';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  fillForm,
  getFormFields,
  type FormFieldInfo,
  type FormFieldValue,
} from '@/lib/pdf/processors/form-filler';
import type { ProcessOutput } from '@/types/pdf';

export interface FormFillerToolProps {
  className?: string;
}

export function FormFillerTool({ className = '' }: FormFillerToolProps) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fields, setFields] = useState<FormFieldInfo[]>([]);
  const [flatten, setFlatten] = useState(false);
  const cancelledRef = useRef(false);

  const handleFilesSelected = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setResult(null);
      try {
        const formFields = await getFormFields(selectedFile);
        setFields(formFields);
      } catch (err) {
        setError('Failed to read form fields. This PDF may not contain fillable forms.');
      }
    }
  }, []);

  const handleFieldChange = useCallback((index: number, value: string | boolean) => {
    setFields((prev) =>
      prev.map((f, i) => (i === index ? { ...f, value } : f))
    );
  }, []);

  const handleProcess = useCallback(async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    try {
      const fieldValues: FormFieldValue[] = fields
        .filter((f) => f.type !== 'button' && f.type !== 'signature' && !f.readOnly)
        .map((f) => ({
          fieldName: f.name,
          value: f.value,
        }));

      const output: ProcessOutput = await fillForm(
        file,
        { fields: fieldValues, flatten },
        (prog) => {
          if (!cancelledRef.current) setProgress(prog);
        }
      );

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed.');
        setStatus('error');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error');
      setStatus('error');
    }
  }, [file, fields, flatten]);

  const isProcessing = status === 'processing';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={setError}
          disabled={isProcessing}
          label="Upload PDF Form"
          description="Drag and drop a PDF form here."
        />
      )}
      {error && (
        <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700" role="alert">
          <p className="text-sm">{error}</p>
        </div>
      )}
      {file && (
        <>
          <Card variant="outlined">
            <div className="flex items-center justify-between">
              <p className="font-medium">{file.name}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setFile(null);
                  setResult(null);
                  setFields([]);
                }}
                disabled={isProcessing}
              >
                Remove
              </Button>
            </div>
          </Card>
          {fields.length > 0 ? (
            <Card variant="outlined" size="lg">
              <h3 className="text-lg font-medium mb-4">Form Fields ({fields.length})</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {fields.map((field, idx) => {
                  const fieldId = `form-field-${idx}`;
                  const isDisabled = isProcessing || Boolean(field.readOnly);

                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <label
                        htmlFor={fieldId}
                        className="w-1/3 text-sm font-medium truncate"
                        title={field.name}
                      >
                        {field.name}
                      </label>
                      {field.type === 'checkbox' ? (
                        <input
                          id={fieldId}
                          type="checkbox"
                          checked={Boolean(field.value)}
                          onChange={(e) => handleFieldChange(idx, e.target.checked)}
                          disabled={isDisabled}
                          className="w-4 h-4 cursor-pointer"
                        />
                      ) : field.type === 'dropdown' || field.type === 'optionlist' ? (
                        <select
                          id={fieldId}
                          value={String(field.value ?? '')}
                          onChange={(e) => handleFieldChange(idx, e.target.value)}
                          disabled={isDisabled}
                          className="flex-1 px-3 py-2 border rounded text-sm bg-background text-foreground"
                        >
                          <option value="">Select {field.type}</option>
                          {(field.options ?? []).map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : field.type === 'radio' && (field.options ?? []).length > 0 ? (
                        <div
                          id={fieldId}
                          role="radiogroup"
                          aria-label={field.name}
                          className="flex-1 flex flex-wrap gap-3"
                        >
                          {(field.options ?? []).map((opt) => (
                            <label key={opt} className="inline-flex items-center gap-1.5 text-sm cursor-pointer">
                              <input
                                type="radio"
                                name={`${fieldId}-${field.name}`}
                                value={opt}
                                checked={field.value === opt}
                                onChange={() => handleFieldChange(idx, opt)}
                                disabled={isDisabled}
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <input
                          id={fieldId}
                          type="text"
                          value={String(field.value ?? '')}
                          onChange={(e) => handleFieldChange(idx, e.target.value)}
                          placeholder={`Enter ${field.type}`}
                          className="flex-1 px-3 py-2 border rounded text-sm bg-background text-foreground"
                          disabled={isDisabled}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <label className="flex items-center gap-2 mt-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={flatten}
                  onChange={(e) => setFlatten(e.target.checked)}
                  disabled={isProcessing}
                  className="w-4 h-4"
                />
                <span className="text-sm">Flatten form after filling (make non-editable)</span>
              </label>
            </Card>
          ) : (
            <Card variant="outlined">
              <p className="text-gray-500">No fillable form fields found in this PDF.</p>
            </Card>
          )}
        </>
      )}
      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          onCancel={() => {
            cancelledRef.current = true;
            setStatus('idle');
          }}
          showPercentage
        />
      )}
      {file && fields.length > 0 && (
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={handleProcess}
            disabled={!file || isProcessing}
            loading={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Fill Form'}
          </Button>
          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace('.pdf', '_filled.pdf')}
              variant="secondary"
              size="lg"
              showFileSize
            />
          )}
        </div>
      )}
      {status === 'complete' && result && (
        <div className="p-4 rounded bg-green-50 border border-green-200 text-green-700" role="status">
          <p className="text-sm font-medium">Form filled successfully!</p>
        </div>
      )}
    </div>
  );
}

export default FormFillerTool;
