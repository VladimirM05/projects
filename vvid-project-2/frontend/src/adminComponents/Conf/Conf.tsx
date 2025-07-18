import { FC, useState } from "react";
import "../standartStyles.pcss"

interface AdminConf {
  initialTitle: string;
  initialDescription: string;
  onSave: (title: string, description: string) => void;
}

const AdminConfForm: FC<AdminConf> = ({ initialTitle, initialDescription, onSave }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSave = () => {
    onSave(title, description);
  };

  return (
    <section className="main-section">
      <h2 className="section-title">Главная информация о конференции</h2>
      <div className="form-group">
        <label className="group-label">Название:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-form"
        />
      </div>
      <div className="form-group">
        <label className="group-label">Описание:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-area"
        />
      </div>
      <button onClick={handleSave} className="save-button">Сохранить</button>
    </section>
  );
};

export default AdminConfForm;