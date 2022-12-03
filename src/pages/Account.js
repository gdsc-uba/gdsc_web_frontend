import React from 'react';

const Account = () => {
    return (
        <div>
            <div align="center">
                <svg width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1359 27.6543C21.7724 27.6543 27.963 21.4637 27.963 13.8271C27.963 6.19062 21.7724 0 14.1359 0C6.49934 0 0.308716 6.19062 0.308716 13.8271C0.308716 21.4637 6.49934 27.6543 14.1359 27.6543ZM9.76475 26.9477C6.64557 25.9092 4.02043 23.7903 2.33363 21.0346C4.76345 25.0047 9.14026 27.6539 14.1358 27.6539C18.4243 27.6539 22.2567 25.7016 24.7929 22.6374C23.1618 24.6077 20.9945 26.1182 18.5146 26.946C17.8126 27.081 17.5639 26.6506 17.5639 26.2805C17.5639 26.1305 17.5657 25.8669 17.5682 25.5143L17.5682 25.5132V25.513C17.5732 24.8 17.5808 23.7237 17.5808 22.4879C17.5808 21.1977 17.1386 20.3539 16.642 19.9269C19.7225 19.5849 22.9557 18.416 22.9557 13.104C22.9557 11.5948 22.4201 10.3606 21.5339 9.39373C21.6765 9.044 22.151 7.63833 21.3964 5.73439C21.3964 5.73439 20.2377 5.3626 17.5978 7.15195C16.4935 6.84551 15.3102 6.69188 14.1363 6.68678C12.9606 6.69188 11.7773 6.84551 10.6747 7.15195C8.03312 5.3626 6.87191 5.73439 6.87191 5.73439C6.11984 7.63833 6.59434 9.044 6.73694 9.39373C5.85245 10.3606 5.31344 11.5948 5.31344 13.104C5.31344 18.4024 8.54157 19.5891 11.6118 19.938C11.2163 20.2835 10.8597 20.8929 10.7341 21.7868C9.9464 22.1399 7.94314 22.7502 6.70978 20.6374C6.70978 20.6374 5.97978 19.3107 4.59193 19.2122C4.59193 19.2122 3.24143 19.1953 4.49686 20.0534C4.49686 20.0534 5.40342 20.4787 6.03241 22.0754C6.03241 22.0754 6.84389 24.7645 10.69 23.9292C10.6936 24.5481 10.6987 25.0854 10.7027 25.5011L10.7027 25.5015C10.7061 25.8604 10.7087 26.1287 10.7087 26.2805C10.7087 26.6472 10.4565 27.0742 9.76475 26.9477Z" fill="white" />
                </svg>
            </div>
            <div class="acircle1">
                <svg width="205" height="205" viewBox="0 0 205 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="102" transform="matrix(1 0 0 -1 102.5 102.5)" stroke="black"/>
                </svg>
            </div>
            <div align="left" class="aname mb-4">
                <h1 class="agreetings">Hello!</h1>

            </div>
            <div class="container aaccountdivs row">
                <div class="col-md-6 aimage" align="center">
                    <div class="aimagediv">
                        <div class="aimages">
                            <image src="../public/logo192.png"></image>
                        </div>
                        <div>
                            <h2 class="anametag">Jane Doe </h2>
                            <h3 class="ajob">Developer</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ainfo">
                    <div>
                        <form>
                            <label class="alabel">Your Name</label><br />
                            <input type="text" class="ainput"></input><br />
                            <label class="alabel">Your Email</label><br />
                            <input type="email" class="ainput"></input><br />
                            <label class="alabel">Your Bio</label><br />
                            <textarea class="ainput abio" type='text-area'></textarea><br />
                            <label class="alabel">Your area of interest</label><br />
                            <input type="text" class="ainput"></input><br />
                            <button type="submit" class="ainputs">Save Details</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Account;