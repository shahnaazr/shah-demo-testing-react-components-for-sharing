import Appointment from './appointment';
import { useState } from 'react';

interface AppointmentInfo {
	id: number;
	person: string;
	date: string;
	description: string;
	confirmed: boolean;
}

const initial_appointments: Array<AppointmentInfo> = [
	{
		id: 1,
		person: 'Terence',
		date: '7 Nov',
		description: 'Ask about his dog',
		confirmed: false,
	},
	{
		id: 2,
		person: 'Jemima',
		date: '7 Nov',
		description: 'Discuss world peace',
		confirmed: true,
	},
];

const AppointmentList = () => {
	const [appointments, setAppointments] =
		useState<Array<AppointmentInfo>>(initial_appointments);

	const confirmAppt = (id: number) => {
		const appts = [...appointments];
		const appt = appts.find((a) => a.id === id);
		if (appt) {
			appt.confirmed = true;
		}
		setAppointments(appts);
	};

	return (
		<section>
			<h2>Appointments</h2>
			{appointments && (
				<section className='appointmentList'>
					{appointments.map((a: AppointmentInfo) => (
						<Appointment
							key={a.id}
							id={a.id}
							description={a.description}
							date={a.date}
							person={a.person}
							confirmed={a.confirmed}
							onMarkConfirmed={(id: number) => confirmAppt(id)}
						/>
					))}
				</section>
			)}
		</section>
	);
};

export default AppointmentList;
