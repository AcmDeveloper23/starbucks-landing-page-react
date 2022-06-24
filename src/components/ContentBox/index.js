import React from 'react'
import "./ContentBox.scss";
import Button from '../Button';

const ContentBox = ({item}) => {

  const { title, description, btnText, btnClassType, imgUrl, boxColor, textColor } = item;

  return (
    <section style={{backgroundColor: boxColor}} className="content">
      <div className="content-textBox" style={{color: textColor}}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <Button text={btnText} classType={btnClassType} />
      </div>
      <div className="content-imgBox">
        <img src={require(`../../assets/img/${imgUrl}`)} alt={`${title} image`} className="content-imgBox__img" />
      </div>
    </section>
  )
}

export default ContentBox;