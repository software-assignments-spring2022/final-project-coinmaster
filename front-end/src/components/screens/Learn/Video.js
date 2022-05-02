import YoutubeEmbed from "./YoutubeEmbed";
import './Learn.css'


export default function Video() {
  return (
    <div className="Video">
      <h4>Basics: What is Bitcoin?</h4>
      <YoutubeEmbed embedId="41JCpzvnn_0" />
        <br></br>
      <h4>Tutorial: The Ultimate Cryptocurrency Trading Course for Beginners</h4>
      <YoutubeEmbed embedId="mQvw5JXXnrQ" /> 
      <br></br>
      <h4>Basics: Blockchain In 7 Minutes</h4>
      <YoutubeEmbed embedId="yubzJw0uiE4" /> 
    </div>
  );
}
