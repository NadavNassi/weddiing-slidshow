

export const ThankModal = ({ setModal }) => {
    return (
        <>
            <div className="screen" onClick={() => setModal(false)}></div>
            <section>
                <h3>Thank you! You will see it soon on the screen!</h3>
                <button onClick={() => setModal(false)}>OK</button>
            </section>
        </>
    )
}