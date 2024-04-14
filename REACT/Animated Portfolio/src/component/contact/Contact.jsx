import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'>

    <div className="textContainer">
        <h1>Let's Work Together</h1>
        <div className="item">
            <h2>Mail</h2>
            <span>test@gmail.com</span>
        </div>
        <div className="item">
            <h2>Address</h2>
            <span>USA</span>
        </div>
        <div className="item">
            <h2>Phone</h2>
            <span>+1025975</span>
        </div>
    </div>

    <div className="formContainer">
    <form>
        <input type="text" id="name" name="name" placeholder="Name" />

        <input type="email" id="email" name="email" placeholder="Email" />

        <textarea id="message" name="message" placeholder="Message"/>

        <button type="submit">Submit</button> 
    </form>
    </div>


    </div>
  )
}

export default Contact