import React, { useState, useCallback } from "react";
import { Upload, File, X } from "lucide-react";
import { useDropzone } from "react-dropzone";

interface UploadScreenProps {
  onResultsReady: () => void;
}

export default function UploadScreen({ onResultsReady }: UploadScreenProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev >= [...prev, ...acceptedFiles]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Invoices</h1>
      <p className="text-gray-600 mb-8">
        Drop your PDF invoices here — we'll analyse them instantly with AI
      </p>

      {/* Build these sections yourself: */}

      {/* 1. Big Drag & Drop Zone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-3xl p-12 text-center transition-all cursor-pointer
    ${
      isDragActive
        ? "border-blue-600 bg-blue-50"
        : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
    }`}
      >
        <input {...getInputProps()} />

        <Upload size={48} className="mx-auto text-gray-400 mb-4" />

        {isDragActive ? (
          <p className="text-xl font-medium text-blue-600">
            Drop the PDF invoices here...
          </p>
        ) : (
          <>
            <p className="text-xl font-medium text-gray-700 mb-2">
              Drag & drop your PDF invoices here
            </p>
            <p className="text-gray-500">or click to browse files</p>
            <p className="text-xs text-gray-400 mt-4">
              Only PDF files accepted • Max 20 at once
            </p>
          </>
        )}
      </div>
      {/* 2. List of selected files (with remove button) */}

      {/* 3. Process Button (disabled until files are selected) */}

      {/* 4. Processing state (progress bar + "AI is analysing...") */}
    </div>
  );
}
