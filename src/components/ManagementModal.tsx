import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { motion } from 'motion/react';

interface ManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (type: string, data: any) => void;
  type: 'Publication' | 'Project' | 'Grant' | 'Task' | 'Goal';
}

export const ManagementModal = ({ isOpen, onClose, onSave, type }: ManagementModalProps) => {
  const [formData, setFormData] = useState<any>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(type, { ...formData, id: Date.now().toString() });
    setFormData({});
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const renderFields = () => {
    switch (type) {
      case 'Publication':
        return (
          <>
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy/60 uppercase">Title</label>
              <input required name="title" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Publication Title" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy/60 uppercase">Journal/Conference</label>
              <input required name="journal" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Journal Name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Year</label>
                <input required name="year" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="2024" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Status</label>
                <select name="status" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm">
                  <option value="draft">Draft</option>
                  <option value="submitted">Submitted</option>
                  <option value="under-review">Under Review</option>
                  <option value="revision">Revision</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
          </>
        );
      case 'Project':
        return (
          <>
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy/60 uppercase">Project Name</label>
              <input required name="name" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Project Name" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy/60 uppercase">Description</label>
              <textarea name="description" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Short description..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Status</label>
                <select name="status" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm">
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="on-hold">On Hold</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Progress (%)</label>
                <input type="number" name="progress" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="0" />
              </div>
            </div>
          </>
        );
      case 'Grant':
        return (
          <>
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy/60 uppercase">Grant Title</label>
              <input required name="title" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Grant Title" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy/60 uppercase">Agency</label>
              <input required name="agency" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Funding Agency" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Amount (RM)</label>
                <input type="number" name="amount" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="50000" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Status</label>
                <select name="status" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm">
                  <option value="prospect">Prospect</option>
                  <option value="applied">Applied</option>
                  <option value="awarded">Awarded</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </>
        );
      case 'Task':
        return (
          <>
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy/60 uppercase">Task Title</label>
              <input required name="title" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Task Title" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Deadline</label>
                <input required name="deadline" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Mar 25" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Priority</label>
                <select name="priority" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </>
        );
      case 'Goal':
        return (
          <>
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy/60 uppercase">Goal</label>
              <input required name="goal" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Personal Goal" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Category</label>
                <input required name="category" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="Health" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy/60 uppercase">Progress (%)</label>
                <input type="number" name="progress" onChange={handleChange} className="w-full p-2 border border-navy/10 rounded-lg text-sm" placeholder="0" />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="p-6 border-b border-navy/5 flex justify-between items-center bg-navy text-white">
          <h3 className="font-bold">Add New {type}</h3>
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {renderFields()}
          <div className="pt-4 flex gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-navy/10 rounded-xl text-sm font-bold text-navy/60 hover:bg-navy/5 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 px-4 py-2 bg-gold text-navy rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors"
            >
              <Save size={18} />
              Save {type}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
