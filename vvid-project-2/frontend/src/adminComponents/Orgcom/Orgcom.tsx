import { FC, useState } from 'react';
import '../standartStyles.pcss';
import { CommitteeMember } from '@/props/types';

interface AdminOrgComProps {
	coChairs: CommitteeMember[];
	members: CommitteeMember[];
	onAddCoChair: (member: CommitteeMember) => void;
	onRemoveCoChair: (index: number) => void;
	onAddMember: (member: CommitteeMember) => void;
	onRemoveMember: (index: number) => void;
}

const AdminOrgCom: FC<AdminOrgComProps> = ({
	coChairs,
	members,
	onAddCoChair,
	onRemoveCoChair,
	onAddMember,
	onRemoveMember,
}) => {
	const [newCoChair, setNewCoChair] = useState<CommitteeMember>({
		name: '',
		affiliation: '',
	});
	const [newMember, setNewMember] = useState<CommitteeMember>({
		name: '',
		affiliation: '',
	});

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

	return (
		<section className="main-section">
			<h2 className="section-title">Орг-комитет</h2>

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
