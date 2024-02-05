import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Table() {
  return (
    <table className="w-[80%] max-w-[800px] mt-6 border-collapse odd:bg-white">
      <thead>
        <tr>
          <th className="p-[10px]"></th>
          <th className="p-[10px]">BASIC</th>
          <th className="p-[10px]">STANDARD</th>
          <th className="p-[10px]">PREMIUM</th>
        </tr>
      </thead>

      <tbody className="text-[15px] leading-5 text-[#999] [&>*:nth-child(odd)]:bg-[#222]">
        <tr>
          <td className="w-[50px] p-[10px]">
            Monthly price after free month ends on 6/19/19
          </td>
          <td className="w-[50px] text-center p-[10px]">$8.99</td>
          <td className="w-[50px] text-center p-[10px]">$12.99</td>
          <td className="w-[50px] text-center p-[10px]">$15.99</td>
        </tr>

        <tr>
          <td className="w-[50px] p-[10px]">HD Available</td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faXmark} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td> 
        </tr>

        <tr>
          <td className="w-[50px] p-[10px]">Ultra HD Available</td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faXmark} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faXmark} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>

        <tr>
          <td className="w-[50px] p-[10px]">Screens you can watch on at the same time</td>
          <td className="w-[50px] text-center p-[10px]">1</td>
          <td className="w-[50px] text-center p-[10px]">2</td>
          <td className="w-[50px] text-center p-[10px]">4</td>
        </tr>

        <tr>
          <td className="w-[50px] p-[10px]">Watch on your laptop, TV, phone and tablet</td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>

        <tr>
          <td className="w-[50px] p-[10px]">Unlimited movies and TV shows</td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>

        <tr>
          <td className="w-[50px] p-[10px]">Cancel anytime</td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>

        <tr>
          <td className="w-[50px] p-[10px]">First month free</td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
          <td className="w-[50px] text-center p-[10px]">
            <FontAwesomeIcon icon={faCheck} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
