import { FC, useState } from "react";
import "../standartStyles.pcss"

interface AdminImportant {
  initialYear: number;
  onSave: (year: number) => void;
}

const AdminImportantForm: FC<AdminImportant> = ({ initialYear, onSave }) => {
  const [year, setYear] = useState(initialYear);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    try {
      await onSave(year);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="main-section">
      <h2 className="section-title">Информация, нуждающаяся в ежегодной корректировке</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label className="group-label">Год:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="input-form"
          disabled={isSaving}
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

export default AdminImportantForm;