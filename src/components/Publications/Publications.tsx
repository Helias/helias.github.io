import Article from './Article';

export default function Publications(): JSX.Element {
  return (
    <div id="publications" className="mb-10 pt-16">
      <div className="w-full">
        <div className="ml-[5vw]">
          <h2 className="text-6xl mt-20 text-gray-600 underline underline-offset-15">
            Publications
          </h2>
        </div>
      </div>

      <Article
        image="publications/silence-pipeline.svg"
        title="Breaking the Silence: Detecting AI-Converted Voices in the Quietest Moments"
        authors="Stefano Borzì, Lorenzo Mongelli, Filippo Stanco, Sebastiano Battiato, Dario Allegra"
        abstract="Recent advances in artificial intelligence have facilitated the creation of audio deepfakes, synthetic voice recordings that closely mimic human speech. While this tech- nology offers potential benefits in various fields, it also raises significant ethical and legal concerns, particularly regarding its potential misuse in fraud, misinformation, and identity theft. This paper addresses the critical need for reliable and explainable deepfake audio de- tection methods by developing and evaluating an approach that prioritizes handcrafted audio features over complex neural networks. Our method leverages the Random Forest Classifier model to analyze these handcrafted features, with a particular focus on the silent segments of audio samples. Utilizing the DEEP-VOICE dataset, which includes audio samples obtained through voice conversion techniques, our research aims to demonstrate that analyzing silent parts of the audio alone can achieve high-performance deepfake detection. Experiments were conducted on both entire audio samples and their silent segments. The results indicate no sig- nificant difference in accuracy between the two approaches, highlighting that discriminative features of audio deepfakes are present even in the quietest moments. This finding underscores the efficacy of our method and suggests potential advantages in computational efficiency and robustness, as well as enhanced explainability due to the use of interpretable, handcrafted features."
        website="https://unict-fake-audio.github.io/audio-datasets-overview/"
        event="https://iplab.dmi.unict.it/mmforwild24/programme"
      />

      <Article
        image="publications/spafe.png"
        title="Spafe: Simplified Python Audio Features Extraction"
        authors="Ayoub Malek, Hadrien Titeux, Stefano Borzì, Christian Heider Nielsen, Fabian-Robert Stöter, Hervé Bredin, Eryk Urbański & Kevin Mattheus Moerman"
        abstract="Spafe (Simplified Python Audio Features Extraction) is a light weight library that aims to unite audio feature extraction algorithms in one simple code."
        link="https://zenodo.org/records/11396240"
        cite="https://github.com/SuperKogito/spafe#citing"
        github="https://github.com/SuperKogito/spafe"
        website="https://superkogito.github.io/spafe/"
      />

      <Article
        image="publications/SyntheticDirection.png"
        title="Is synthetic voice detection research going into the right direction?"
        authors="Stefano Borzì, Oliver Giudice, Filippo Stanco, Dario Allegra"
        abstract="Machine Learning, and in general Artificial Intelligence approaches, brought a great advance in each and every field of Computer Science increasing accuracy levels of predictors in any known problem. Indeed, this evolution enabled the construction of effective frameworks and solutions able to be used in investigative and forensics scenarios for detection of fakes and, in general, manipulations in multimedia contents. On the other hand, can we trust these systems? Is research activity going in the right direction? Are we just taking the low-hanging fruit without taking into account many real-case-in-the-wild situations? The purpose of this paper is to raise an alert to the research community in the specific context of synthetic voice detection, where data available for training is not big enough to give sufficient trust in the techniques available in the literature. To this aim, an exploratory investigation of the most common voice spoofing dataset was carried out and it was surprisingly easy to build simple classifiers without any Deep Learning techniques. Simple considerations on bitrate were sufficient to achieve an effective detection performance."
        link="https://openaccess.thecvf.com/content/CVPR2022W/WMF/papers/Borzi_Is_Synthetic_Voice_Detection_Research_Going_Into_the_Right_Direction_CVPRW_2022_paper.pdf"
        cite="https://github.com/UNICT-Fake-Audio/fake-audio-detector/tree/main?tab=readme-ov-file#reference"
        github="https://github.com/UNICT-Fake-Audio/fake-audio-detector/blob/main/shared/feature_extraction.py"
        website="https://unict-fake-audio.github.io/audio-datasets-overview/"
        event="https://sites.google.com/view/mediaforensics2022"
      />

      <Article
        image="publications/ontotagme.png"
        title="NETME: on-the-fly knowledge network construction from biomedical literature"
        abstract="The rapidly increasing biological literature is a key resource to automatically extract and gain knowledge concerning biological elements and their relations. Knowledge Networks are helpful tools in the context of biological knowledge discovery and modeling. We introduce a novel system called NETME, which, starting from a set of full-texts obtained from PubMed, through an easy-to-use web interface, interactively extracts biological elements from ontological databases and then synthesizes a network inferring relations among such elements. The results clearly show that our tool is capable of inferring comprehensive and reliable biological networks."
        authors="Alessandro Muscolino, Antonio Di Maria, Rosaria Valentina Rapicavoli, Salvatore Alaimo, Lorenzo Bellomo, Fabrizio Billeci, Stefano Borzì, Paolo Ferragina, Alfredo Ferro, Alfredo Pulvirenti"
        link="https://link.springer.com/article/10.1007/s41109-021-00435-x"
        cite="https://link.springer.com/article/10.1007/s41109-021-00435-x#citeas"
        github="https://github.com/code1271968258/tagme"
      />

      <Article
        image="publications/SMART-GUI.png"
        title="The String Matching Algorithms Research Tool. (SMART)"
        authors="S Faro, T Lecroq, S Borzi, S Di Mauro, A Maggio"
        abstract="String matching is the problem of finding all occurrences of a given pattern in a given text. It is an extensively studied problem in computer science because of its direct application to several areas such as text, image and signal processing, speech analysis and recognition, data compression, information retrieval, computational biology and chemistry. Since 1970 more than 85 string matching algorithms have been proposed, and more than 50% of them in the last ten years. In this paper we present Smart, an efficient and flexible tool designed for developing, testing, comparing and evaluating string matching algorithms. It also provides the most comprehensive survey of online exact single string matching algorithms together with a set of corpora available for testing purposes."
        link="https://www.stringology.org/papers/PSC2016.pdf#page=109"
        cite="https://github.com/smart-tool/smart#reference"
        github="https://github.com/smart-tool"
        website="https://smart-tool.github.io/smart/"
      />
    </div>
  );
}
