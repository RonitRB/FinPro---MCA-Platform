import React, { useState } from 'react';
import { Upload, File, CheckCircle, XCircle } from 'lucide-react';
import type { DocumentMetadata } from '../../types/kyc';

export default function DocumentUpload() {
  const [documents, setDocuments] = useState<DocumentMetadata[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newDocument: DocumentMetadata = {
        id: Math.random().toString(36).substr(2, 9),
        type: 'bankStatement',
        fileName: file.name,
        fileSize: file.size,
        uploadedAt: new Date().toISOString(),
        status: 'pending',
        mimeType: file.type,
      };

      setDocuments(prev => [...prev, newDocument]);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-3 mb-6">
        <Upload className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Document Upload</h2>
      </div>

      <div className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
            accept=".pdf,.jpg,.jpeg,.png"
            disabled={uploading}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center space-y-2"
          >
            <File className="w-12 h-12 text-gray-400" />
            <span className="text-sm text-gray-600">
              {uploading ? 'Uploading...' : 'Click to upload or drag and drop'}
            </span>
            <span className="text-xs text-gray-500">
              PDF, JPG, PNG up to 10MB
            </span>
          </label>
        </div>

        {documents.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Uploaded Documents</h3>
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <File className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{doc.fileName}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(doc.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                {doc.status === 'verified' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : doc.status === 'rejected' ? (
                  <XCircle className="w-5 h-5 text-red-500" />
                ) : (
                  <span className="text-xs text-gray-500">Pending</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}