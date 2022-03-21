import YoutubeEmbed from "./YoutubeEmbed";

export default function Video() {
  return (
    <div className="App">
      <h4>Video: What is Bitcoin?</h4>
      <YoutubeEmbed embedId="41JCpzvnn_0" />
      <h4>Video: Simple $100 a Day Crypto Trading Strategy Anyone Can Use</h4>
      <YoutubeEmbed embedId="bxnZEgtHf5E" />
    </div>
  );
}
