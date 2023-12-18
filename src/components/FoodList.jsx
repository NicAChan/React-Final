import { foods } from "../assets/foods"

export default function FoodList({search}) {
  search = search.trim()

  const foodList = () => {
    let content = []

    if (search) {
      foods.forEach(food => {
        if (food.name.toLowerCase().includes(search.toLowerCase())){
          content.push(
            <tr>
              <td>{searchHighlight(food.name)}</td>
              <td>{searchHighlight(food.description)}</td>
            </tr>
          )
        }

      });

      if (content.length == 0) {
        content.push(
          <tr>
            <td>None found...</td>
          </tr>
        )
      }
    } else {
      foods.forEach(food => {
        content.push(
          <tr>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        )
      });
    }
    return content
  }

  const searchHighlight = (str) => {
    const result = []
    let tmp = ""

    for (const char of str) {
      if (tmp) {
        if (tmp.length == search.length) {
          if (tmp.toLowerCase() === search.toLowerCase()){
            result.push(<mark>{tmp}</mark>)
            tmp = ""
          } else {
            result.push(tmp)
            tmp = ""
          }
        } else if (tmp.toLowerCase() != search.toLowerCase().slice(0, tmp.length)) {
          result.push(tmp)
          tmp = ""
        }
      }

      if (!tmp) {
        if (char.toLowerCase() === search[0].toLowerCase()){
          tmp += char
        } else {
          result.push(char)
        }
      } else {
        tmp += char
      }
    }

    if (tmp.toLowerCase() === search.toLowerCase()){
      result.push(<mark>{tmp}</mark>)
    } else {
      result.push(tmp)
    }

    return result
  }

  return(
    <>
      <table>
        <tbody>
          {foodList()}
        </tbody>
      </table>
    </>
  )
}