export interface AppointmentProps {
	id: number;
	date: string;
	person: string;
	description: string;
	confirmed?: boolean;
	onMarkConfirmed?: (id: number) => void;
}

const Appointment: React.FC<AppointmentProps> = ({
	id,
	description,
	person,
	date,
	confirmed,
	onMarkConfirmed,
}) => (
	<div className='appointment'>
		<span className='apptId'>{id}</span>
		<span className='apptDate'>{date}</span>
		<span className='apptPerson'>{person}</span>
		<span className='apptDesc'>{description}</span>
		<span className='apptConfirmation'>
			{!confirmed && onMarkConfirmed && (
				<button onClick={() => onMarkConfirmed(id)}>
					Mark confirmed
				</button>
			)}
			{confirmed && <strong className='confirmed'>Confirmed!</strong>}
		</span>
	</div>
);

export default Appointment;
