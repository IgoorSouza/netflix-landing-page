import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>BASIC</th>
          <th>STANDARD</th>
          <th>PREMIUM</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Monthly price after free month ends on 6/19/19</td>
          <td>$8.99</td>
          <td>$12.99</td>
          <td>$15.99</td>
        </tr>

        <tr>
          <td>HD Available</td>
          <td>
            <FontAwesomeIcon icon={faXmark} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>

        <tr>
          <td>Ultra HD Available</td>
          <td>
            <FontAwesomeIcon icon={faXmark} />
          </td>
          <td>
            <FontAwesomeIcon icon={faXmark} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>

        <tr>
          <td>Screens you can watch on at the same time</td>
          <td>1</td>
          <td>2</td>
          <td>4</td>
        </tr>

        <tr>
          <td>Watch on your laptop, TV, phone and tablet</td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>

        <tr>
          <td>Unlimited movies and TV shows</td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>

        <tr>
          <td>Cancel anytime</td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>

        <tr>
          <td>First month free</td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td>
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
