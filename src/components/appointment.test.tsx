import { render, screen } from "@testing-library/react"
import Appointment, { AppointmentProps } from "./appointment"
import userEvent from "@testing-library/user-event"

describe("appointment component", ()=> {
    it("given the appointment props, when the component is rendered, the the appointment should be present", ()=> {
        //arrange
        const expectedProps: AppointmentProps = {
            id: 1,
            person: "shahnaaz",
            description: "orthodontist appoinment",
            date: "1 march"
        }
            
        //act
        render(<Appointment {...expectedProps}/>)
    
        //assert
        expect(screen.getByText(expectedProps.id)).toBeInTheDocument();
        expect(screen.getByText(expectedProps.person)).toBeInTheDocument();
        expect(screen.getByText(expectedProps.description)).toBeInTheDocument();
        expect(screen.getByText(expectedProps.date)).toBeInTheDocument();
    })

    it("given an unconfirmed appointment, when the component is rendered, then the markconfirmed button should be present", ()=> {
        //arrange
        const unconfirmedAppt: AppointmentProps = {
            id: 1,
            person: "shahnaaz",
            description: "orthodontist appoinment",
            date: "1 march",
            confirmed: false,
            onMarkConfirmed: () => {}
        }
        
        //act
        render(<Appointment {...unconfirmedAppt}/>)
    
        //assert
        expect(screen.getAllByRole("button").find(button => button.textContent === "Mark confirmed")).toBeInTheDocument();
    })

    it("given a confirmed appointment, when the component is rendered, then the markconfirmed button should not be present", ()=> {
        //arrange
        const confirmedAppt: AppointmentProps = {
            id: 1,
            person: "shahnaaz",
            description: "orthodontist appoinment",
            date: "1 march",
            confirmed: true,
            onMarkConfirmed: () => {}
        }
        
        //act
        render(<Appointment {...confirmedAppt}/>)
    
        //assert
        expect(screen.queryAllByRole("button").find(button => button.textContent === "Mark confirmed")).toBeUndefined();
    })

    it("given an appointment is rendered, when the button is clicked, then the onMarkConfirmed function is called with the correct id", async ()=> {

        const mockConfirm = jest.fn();
        //arrange
        const confirmedAppt: AppointmentProps = {
            id: 1,
            person: "shahnaaz",
            description: "orthodontist appoinment",
            date: "1 march",
            confirmed: false,
            onMarkConfirmed: mockConfirm
        }
        
        //act
        render(<Appointment {...confirmedAppt}/>)
        const confirmButton = screen.getAllByRole('button').find((button)=> button.textContent ==='Mark confirmed')
        expect(confirmButton).toBeInTheDocument()
        if (confirmButton)
        await userEvent.click(confirmButton)
    
        //assert
        expect(mockConfirm).toBeCalled()
        expect(mockConfirm).toBeCalledTimes(1);
        expect(mockConfirm).toBeCalledWith(confirmedAppt.id)
        
    })
})