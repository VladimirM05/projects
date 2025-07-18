import { FC, useState } from 'react';
import '../standartStyles.pcss';
import { CommitteeMember } from '@/props/types';

interface AdminProgComProps {
    honoraryChair: CommitteeMember[];
    coChairs: CommitteeMember[];
    members: CommitteeMember[];
    deputyChair: CommitteeMember[];
    onAddImportantMember: (member: CommitteeMember) => void;
    onRemoveImportantMember: (member: number) => void;
    onAddCoChair: (member: CommitteeMember) => void;
    onRemoveCoChair: (index: number) => void;
    onAddMember: (member: CommitteeMember) => void;
    onRemoveMember: (index: number) => void;
    onAddDeputyChairMember: (member: CommitteeMember) => void;
    onRemoveDeputyChairMember: (member: number) => void;
}

const AdminOrgCom: FC<AdminProgComProps> = ({
    honoraryChair,
    deputyChair,
    coChairs,
    members,
    onAddImportantMember,
    onRemoveImportantMember,
    onAddCoChair,
    onRemoveCoChair,
    onAddMember,
    onRemoveMember,
    onAddDeputyChairMember,
    onRemoveDeputyChairMember,
}) => {
    const [newHonoraryChair, setNewHonoraryChair] = useState<CommitteeMember>({
        name: '',
        affiliation: '',
    });
    const [newCoChair, setNewCoChair] = useState<CommitteeMember>({
        name: '',
        affiliation: '',
    });
    const [newMember, setNewMember] = useState<CommitteeMember>({
        name: '',
        affiliation: '',
    });
    const [newDeputyChair, setNewDeputyChair] = useState<CommitteeMember>({
        name: '',
        affiliation: '',
    });

    const handleAddHonoraryChair = () => {
        if (newHonoraryChair.name.trim()) {
            onAddImportantMember(newHonoraryChair);
            setNewHonoraryChair({ name: '', affiliation: '' });
        }
    };

    const handleAddCoChair = () => {
        if (newCoChair.name.trim()) {
            onAddCoChair(newCoChair);
            setNewCoChair({ name: '', affiliation: '' });
        }
    };

    const handleAddMember = () => {
        if (newMember.name.trim()) {
            onAddMember(newMember);
            setNewMember({ name: '', affiliation: '' });
        }
    };

    const handleAddDeputyChair = () => {
        if (newDeputyChair.name.trim()) {
            onAddDeputyChairMember(newDeputyChair);
            setNewDeputyChair({ name: '', affiliation: '' });
        }
    };

    return (
        <section className="main-section">
            <h2 className="section-title">Программный комитет</h2>

            <div className="form-group">
                <h3>Почетный председатель</h3>
                <ul className="object-list">
                    {honoraryChair.map((chair, index) => (
                        <li key={index} className="list-item">
                            <div className="item-content">
                                <div>
                                    <strong>Имя:</strong> {chair.name}
                                </div>
                                {chair.affiliation && (
                                    <div>
                                        <strong>Организация:</strong> {chair.affiliation}
                                    </div>
                                )}
                            </div>
                            <div className="action-buttons">
                                <button
                                    onClick={() => onRemoveImportantMember(index)}
                                    className="remove-button"
                                >
                                    Удалить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="form-group">
                    <label className="group-label">Добавить почетного председателя:</label>
                    <input
                        type="text"
                        placeholder="Имя"
                        value={newHonoraryChair.name}
                        onChange={e =>
                            setNewHonoraryChair({ ...newHonoraryChair, name: e.target.value })
                        }
                        className="input-form"
                    />
                    <input
                        type="text"
                        placeholder="Организация (опционально)"
                        value={newHonoraryChair.affiliation}
                        onChange={e =>
                            setNewHonoraryChair({ ...newHonoraryChair, affiliation: e.target.value })
                        }
                        className="input-form"
                        style={{ marginTop: '8px' }}
                    />
                    <button
                        onClick={handleAddHonoraryChair}
                        className="add-button"
                        style={{ marginTop: '8px' }}
                    >
                        Добавить почетного председателя
                    </button>
                </div>
            </div>

            <div className="form-group">
                <h3>Заместители председателя</h3>
                <ul className="object-list">
                    {deputyChair.map((chair, index) => (
                        <li key={index} className="list-item">
                            <div className="item-content">
                                <div>
                                    <strong>Имя:</strong> {chair.name}
                                </div>
                                {chair.affiliation && (
                                    <div>
                                        <strong>Организация:</strong> {chair.affiliation}
                                    </div>
                                )}
                            </div>
                            <div className="action-buttons">
                                <button
                                    onClick={() => onRemoveDeputyChairMember(index)}
                                    className="remove-button"
                                >
                                    Удалить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="form-group">
                    <label className="group-label">Добавить заместителя председателя:</label>
                    <input
                        type="text"
                        placeholder="Имя"
                        value={newDeputyChair.name}
                        onChange={e =>
                            setNewDeputyChair({ ...newDeputyChair, name: e.target.value })
                        }
                        className="input-form"
                    />
                    <input
                        type="text"
                        placeholder="Организация (опционально)"
                        value={newDeputyChair.affiliation}
                        onChange={e =>
                            setNewDeputyChair({ ...newDeputyChair, affiliation: e.target.value })
                        }
                        className="input-form"
                        style={{ marginTop: '8px' }}
                    />
                    <button
                        onClick={handleAddDeputyChair}
                        className="add-button"
                        style={{ marginTop: '8px' }}
                    >
                        Добавить заместителя председателя
                    </button>
                </div>
            </div>

            <div className="form-group">
                <h3>Сопредседатели</h3>
                <ul className="object-list">
                    {coChairs.map((chair, index) => (
                        <li key={index} className="list-item">
                            <div className="item-content">
                                <div>
                                    <strong>Имя:</strong> {chair.name}
                                </div>
                                {chair.affiliation && (
                                    <div>
                                        <strong>Организация:</strong> {chair.affiliation}
                                    </div>
                                )}
                            </div>
                            <div className="action-buttons">
                                <button
                                    onClick={() => onRemoveCoChair(index)}
                                    className="remove-button"
                                >
                                    Удалить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="form-group">
                    <label className="group-label">Добавить сопредседателя:</label>
                    <input
                        type="text"
                        placeholder="Имя"
                        value={newCoChair.name}
                        onChange={e =>
                            setNewCoChair({ ...newCoChair, name: e.target.value })
                        }
                        className="input-form"
                    />
                    <input
                        type="text"
                        placeholder="Организация (опционально)"
                        value={newCoChair.affiliation}
                        onChange={e =>
                            setNewCoChair({ ...newCoChair, affiliation: e.target.value })
                        }
                        className="input-form"
                        style={{ marginTop: '8px' }}
                    />
                    <button
                        onClick={handleAddCoChair}
                        className="add-button"
                        style={{ marginTop: '8px' }}
                    >
                        Добавить сопредседателя
                    </button>
                </div>
            </div>

            <div className="form-group">
                <h3>Члены комитета</h3>
                <ul className="object-list">
                    {members.map((member, index) => (
                        <li key={index} className="list-item">
                            <div className="item-content">
                                <div>
                                    <strong>Имя:</strong> {member.name}
                                </div>
                                {member.affiliation && (
                                    <div>
                                        <strong>Организация:</strong> {member.affiliation}
                                    </div>
                                )}
                            </div>
                            <div className="action-buttons">
                                <button
                                    onClick={() => onRemoveMember(index)}
                                    className="remove-button"
                                >
                                    Удалить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="form-group">
                    <label className="group-label">Добавить члена комитета:</label>
                    <input
                        type="text"
                        placeholder="Имя"
                        value={newMember.name}
                        onChange={e => setNewMember({ ...newMember, name: e.target.value })}
                        className="input-form"
                    />
                    <input
                        type="text"
                        placeholder="Организация (опционально)"
                        value={newMember.affiliation}
                        onChange={e =>
                            setNewMember({ ...newMember, affiliation: e.target.value })
                        }
                        className="input-form"
                        style={{ marginTop: '8px' }}
                    />
                    <button
                        onClick={handleAddMember}
                        className="add-button"
                        style={{ marginTop: '8px' }}
                    >
                        Добавить члена комитета
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AdminOrgCom;