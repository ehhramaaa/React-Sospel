/* eslint-disable react/prop-types */

const Auth = ({ Modal, modalLogin, modalRegis, setInputValue, inputValue, swiper, usernames, setLoginModal, setRegisModal, credentials, inputUsername, setInputUsername, inputPassword, setInputPassword, closeIconModal }) => {
    {/* Todo Autentication */ }
    const authentication = () => {
        const userToFind = inputUsername;
        const passwordToFind = inputPassword;

        const userCredentials = credentials.find(cred => cred.username === userToFind);
        console.log(userCredentials)
        if (userCredentials) {
            if (userToFind === userCredentials.username && passwordToFind === userCredentials.password) {
                console.log('Login successful');
            } else {
                if (userToFind !== userCredentials.username) {
                    console.log('User not found!');
                } else if (passwordToFind !== userCredentials.password) {
                    console.log('Password wrong!');
                }
            }
        } else {
            console.log('User Not Found!');
        }

    };


    // Sign In
    const gotoSlide = (index) => {
        swiper.slideTo(index);
    };

    const restart = () => {
        gotoSlide(0);
    };

    const checkValid = (event) => {
        setInputValue(event.target.value);
        event.target.nextElementSibling.disabled = !event.target.value.length;
        if (event.target.type === 'text') {
            setInputUsername(event.target.value);
        } else if (event.target.type === 'password') {
            setInputPassword(event.target.value);
        }
    };

    // Username
    const debounce = (callback, time) => {
        let interval;
        return (...args) => {
            clearTimeout(interval);
            interval = setTimeout(() => {
                callback.apply(null, args);
            }, time);
        };
    };

    const updateUi = (value) => {
        spinner.classList.remove("visible");

        const usernameExists = usernames.some((u) => u === value);

        if (usernameExists) {
            alert.classList.remove("visible");
        } else {
            alert.classList.add("visible");
        }
    };

    const handleChange = debounce((value) => {
        updateUi(value);
    }, 500);

    const handleInput = (event) => {
        const { value } = event.target;
        setInputValue(value);
        handleChange(value);
    };

    const handleDisable = inputValue.length === 0;

    const spinner = document.getElementById("spinner"),
        alert = document.getElementById("alert");

    const handleStartTyping = () => {
        spinner.classList.add("visible");
    };

    // Password
    const bars = document.querySelector("#bars"),
        strengthDiv = document.querySelector("#strength"),
        passwordInput = document.querySelector("#password");

    const strength = {
        1: "weak",
        2: "medium",
        3: "strong",
    };

    const getIndicator = (password, strengthValue) => {
        for (let index = 0; index < password.length; index++) {
            let char = password.charCodeAt(index);
            if (!strengthValue.upper && char >= 65 && char <= 90) {
                strengthValue.upper = true;
            } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
                strengthValue.numbers = true;
            } else if (!strengthValue.lower && char >= 97 && char <= 122) {
                strengthValue.lower = true;
            }
        }

        let strengthIndicator = 0;

        for (let metric in strengthValue) {
            if (strengthValue[metric] === true) {
                strengthIndicator++;
            }
        }

        return strength[strengthIndicator] ?? "";
    };

    const getStrength = (password) => {
        let strengthValue = {
            upper: false,
            numbers: false,
            lower: false,
        };

        return getIndicator(password, strengthValue);
    };

    const handleChangePassword = () => {
        let { value: password } = passwordInput;

        const strengthText = getStrength(password);

        bars.classList = "";

        if (strengthText) {
            strengthDiv.innerText = `${strengthText} Password`;
            bars.classList.add(strengthText);
        } else {
            strengthDiv.innerText = "";
        }
    };
    return (
        <>
            <Modal
                open={modalLogin}
                onClose={() => [setLoginModal(false), setInputValue('')]}
                center
                closeIcon={closeIconModal}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                <div className="authCard">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {/* Username */}
                            <div className="swiper-slide">
                                <img src="/vite.svg" alt="Slide 1" />
                                <h2>Welcome</h2>
                                <h3>Enter your username</h3>
                                <input spellCheck="false" onInput={checkValid} type="text" placeholder="e.g. johnsmith" className="control" />
                                <div id="spinner" className="spinner"></div>
                                <button disabled={handleDisable} type="button" onClick={() => [gotoSlide(1), setInputValue('')]}>Next</button>
                            </div>

                            {/* Password */}
                            <div className="swiper-slide">
                                <div className="image-wrapper">
                                    <img src="/public/vite.svg" alt="Slide 2" />
                                </div>
                                <h2>Security</h2>
                                <h3>Enter your password</h3>
                                <input onInput={checkValid} type="password" id="password" placeholder="Your password" />

                                {/* Toggle Show Password */}
                                {/* <button className="toggle" type="button" onClick={() => togglePassword(this)}></button> */}
                                {/* End Toggle */}

                                <button disabled={handleDisable} type="button" onClick={() => authentication()} style={{ marginTop: '2rem' }}>Login</button>
                            </div>

                        </div>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </Modal>

            <Modal
                open={modalRegis}
                onClose={() => [setRegisModal(false), setInputValue('')]}
                center
                closeIcon={closeIconModal}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                <div className="authCard">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="/vite.svg" alt="Slide 1" />
                                <h2>Welcome</h2>
                                <h3>Let's create your username</h3>
                                <input spellCheck="false" onInput={checkValid} type="text" placeholder="e.g. johnsmith" className="control" onChange={handleInput} onKeyDown={handleStartTyping} />
                                <div id="spinner" className="spinner"></div>
                                <div id="alert" className="alert">Username already exists</div>
                                <button disabled={handleDisable} type="button" onClick={() => [gotoSlide(1), setInputValue('')]}>Next</button>
                            </div>

                            <div className="swiper-slide">
                                <div className="image-wrapper">
                                    <img src="/public/vite.svg" alt="Slide 2" />
                                </div>
                                <h2>Security</h2>
                                <h3>Enter a strong password</h3>
                                <input onInput={checkValid} type="password" id="password" placeholder="Your password" onKeyUp={() => handleChangePassword()} onChange={handleInput} />

                                <div id="bars">
                                    <div></div>
                                </div>
                                <div className="strength" id="strength"></div>
                                <button disabled={handleDisable} type="button" onClick={() => gotoSlide(2)}>Next</button>
                            </div>

                            <div className="swiper-slide">
                                <div className="image-wrapper">
                                    <img src="/public/vite.svg" alt="Slide 3" />
                                </div>
                                <h2>Finish</h2>
                                <h3>You're all good to go</h3>
                                <button type="submit">Complete</button>
                                <button className="secondary" onClick={restart}>Restart</button>
                            </div>
                        </div>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </Modal>
            {/* Todo Alert */}
        </>
    )
}

export default Auth