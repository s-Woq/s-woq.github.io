function Form(){
    return(
        <div>
             <form action="/submit" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                 <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="1234567890" required />

                <label htmlFor="proposal">Proposal:</label>
                <textarea id="proposal" name="proposal" rows="4" cols="50" required></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}