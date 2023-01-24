function FavoriteSites() {
  return (
    <>
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
        Deze man maakt react flask app en deployed deze. Eerst als een statische
        pagina met alleen nginx daarn met flask en gunicorn
      </p>

      <a href="https://www.youtube.com/watch?v=u2PxRxhnplM">
        Raspberry security
      </a>
      <p>
        Security is belangrijk zeker als je router openzet (port forwarding)
        voor web acces van de Raspberrypi!!!
      </p>
    </>
  );
}

export default FavoriteSites;
