function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg ">
            <div class="container">
                <a class="navbar-brand fw-bold" href="#">Climate Action</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link fw-bold" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link fw-bold" href="#ways">7 Simple Ways</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link fw-bold" href="#ref">Reference</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    );
}


export default Navbar;