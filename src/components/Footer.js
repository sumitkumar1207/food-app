import React from 'react'

export default () => {
    return (
        <footer className="footer text-white mt-5 p-4 text-center">
            <a class="navbar-brand" href="https://github.com/sumitkumar1207" target="_blank">
                <i className="fa fa-github"></i>
            </a>
            Copyright &copy;{new Date().getFullYear()} Food-App
        </footer>
    )
}
