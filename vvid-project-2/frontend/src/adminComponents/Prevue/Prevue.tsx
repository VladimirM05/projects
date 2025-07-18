import { FC, useState } from "react";
import "../standartStyles.pcss"

interface AdminPrevue {
  initialTitle: string;
  initialDescription: string;
  onSave: (title: string, description: string) => void;
}

const AdminPrevueForm: FC<AdminPrevue> = ({ initialTitle, initialDescription, onSave }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    try {
      await onSave(title, description);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="main-section">
      {error && <div className="error-message">{error}</div>}
      <h2 className="section-title">Превью конференции</h2>
      <div className="form-group">
        <label className="group-label">Вводная часть:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-form"
        />
      </div>
      <div className="form-group">
        <label className="group-label">Приглашение:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-area"
        />
      </div>
      <button 
        onClick={handleSave} 
        className="save-button"
        disabled={isSaving}
      >
        {isSaving ? 'Сохранение...' : 'Сохранить'}
      </button>
    </section>
  );
};

export default AdminPrevueForm;