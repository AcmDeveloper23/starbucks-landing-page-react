import React from 'react'
import "./ContentBox.scss";
import Button from '../Button';

const ContentBox = ({ item, index }) => {

  const { title, description, btnText, btnClassType, imgUrl, boxColor, textColor, textSize } = item;

  const imageBox = () => (
    <div className="content-imgBox">
      <img src={require(`../../assets/img/${imgUrl}`)} alt={title} className="content-imgBox__img" />
    </div>
  )

  const textBox = () => (
    <div className="content-textBox" style={{ color: textColor }}>
      <h1 style={{ fontSize: `${textSize}rem` }}>{title}</h1>
      {description && <p>{description}</p>}
      <Button text={btnText} classType={btnClassType} />
    </div>
  )

  return (
    <section style={{ backgroundColor: boxColor }} className="content">
      {console.log("Key", index)}
      {index % 2 === 0 ? (
        <>
          {imageBox()}
          {textBox()}
        </>
      ) : (
        <>
          {textBox()}
          {imageBox()}
        </>
      )}


    </section>
  )
}

export default ContentBox;