import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <img src="src/assets/logo.png" />
      <button>Sign in</button>

      <div className="watch">
        <div>
          <h1>See what&apos;s next</h1>
          <h2>WATCH ANYWHERE. CANCEL ANYTIME.</h2>
          <a>
            WATCH FREE FOR 30 DAYS
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
