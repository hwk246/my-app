function FavoriteSites() {
  return (
    <div className="favor-site">
      <h1>Favorite Sites</h1>
      <a href="https://raspberrytips.com/login-as-root/">login as root</a>
      <p>
        Bij opstarten raspberry de root user mogelijkheid is standaard
        uitgeschakeld door Debian developers. Je logt altijd in met een extra
        user. Hierdoor zijn niet alle root permissies mogelijk. Dat moet met
        sudo. Hier een link hoe je toch als root kan inloggen. Naast een video
        een uitgebreide beschrijving. Een raspberrypi-site
      </p>
      <a href="https://www.youtube.com/watch?v=KFwFDZpEzXY">REACT NGINX</a>
      <p>
        Hier wordt een simple react-app met NGINX als webserver gedployed. Dit
        is dus een statische versie. Wat hier ook wordt gedemonstreerd zijn het
        aanmaken van users en hoe je met een .sh file makkelijk kan deployen.{" "}
      </p>

      <a href="https://www.youtube.com/watch?v=KFwFDZpEzXY">
        NGINX GUNICORN REACT FLASK
      </a>
      <p>
        Deze man (Miguel Grinberg) maakt react flask app en deployed deze. Eerst
        als een statische pagina met alleen nginx daarn met flask en gunicorn
      </p>

      <a href="https://www.youtube.com/watch?v=Q2eafQYgglM&list=RDCMUCZJiXG_auf0o7LByqC1LHuQ&start_radio=1&rv=Q2eafQYgglM&t=809">
        Miguel Grinberg Mix
      </a>
      <p>
        Een heleboel nuttige informatie over voornamelijk Flask en React
        gebruik. oa: deployen, Flask als API, Flask websocket etc.
      </p>

      <a href="https://www.youtube.com/watch?v=u2PxRxhnplM">
        Raspberry security
      </a>
      <p>
        Security is belangrijk zeker als je router openzet (port forwarding)
        voor web acces van de Raspberrypi!!!
      </p>
      <a href="https://www.youtube.com/watch?v=Rctz-kCvuwE">
        Websocket for Flask
      </a>
      <p>
        websocket server with flask. No async webserver needed. It works with
        Gunicorn in deployment. ( multiple workers and threads to server
        multiple clients) Intersting for chat, mulitplayer games etc
      </p>
    </div>
  );
}

export default FavoriteSites;
