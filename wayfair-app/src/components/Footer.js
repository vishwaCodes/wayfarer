import React from 'react';

const Footer =  () => {
  return (
    <footer>
    <div class="container">
      <div id="footerRow" class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul id="footerUl" class="list-inline text-center">
            <li class="list-inline-item">
              <a id="footerSocials" href="#">
                <span class="fa-stack fa-lg">
                  <i id="twitter" class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a id="footerSocials" href="#">
                <span class="fa-stack fa-lg">
                  <i id="facebook" class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a id="footerSocials" href="#">
                <span class="fa-stack fa-lg">
                  <i id="github" class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p id="copyright" class="copyright text-muted mt-5 ml-5">Copyright &copy; Wayfarer 2021</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;