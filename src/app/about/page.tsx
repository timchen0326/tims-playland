import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          About 2024-06-20
        </Typography>
        <Box mt={2} mb={2}>
          <Typography variant="body1" paragraph>
            想到有一天我會跟蔡莎莉在一起我猜我們兩個在三月底前都沒想過吧！
            畢竟我們當了快兩年多的好朋友，也突然冒起的火花就這樣被持續著點燃，
            對我來說這是永遠不會消失的！這應該從哪裡講起？
          </Typography>
          <Typography variant="body1" paragraph>
            從好好認識你以來一直是我最強的依靠，不管在任何時候，
            都可以去想辦法解決我的困擾。在剛開始在一起的時候我就在想，
            我是不是沒有很做自己去做一些不想做的事，像是出遠門玩，吃飯，
            開車，離開downtown toronto，一直到回台灣，每天出去吃飯，
            開車很自由，plan了很多的行程，感覺在幫人生跟在幫未來的我們做的努力，
            一切都覺得不是一個負擔，而是很大的動力。早晨上班有你的陪伴，
            陪我在擁擠的捷運上面抱抱還有互相買早餐，我在上班的時候都是非常開心的，
            因為我可以確定我在一天的努力過後，在中山站碰到你都會是很開心的。
          </Typography>
          <Typography variant="body1" paragraph>
            我知道每個人對感情都有自己的想法，但在跟你交往後發現我的愛原來是可以被無限的放大，
            而且也會接受到一樣的愛，讓我對感情以及戀愛又有新的定義！
            我自己是一個很容易忘記很多事情的人，常常忘東忘西，尤其是對於台灣，
            跟很多去玩的地方的記憶都沒有很深刻，所以希望可以邀請你八月，十二月，
            以及之後旅遊都有你陪伴。我知道你想說什麼：”蛤只有旅遊喔“ ，我的意思
            是你可以在我的人生中陪伴以及愛我到永遠，讓我們的回憶刻印在我們的心中，
            這樣才不會忘記。
          </Typography>
          <Typography variant="body1" paragraph>
            寶貝很謝謝你對我那麼好，願意為我去做很多很多的事，
            像是買藥，幫我寄東西，我生病的時候照顧我，我知道我也常常亂發脾氣，
            我會盡量去做調整，我很高興你願意介紹你的家人們給我，他們也很願意接納我，
            我感覺我在你們家得到的愛比我自己家人還多，讓我感受到什麼是回家的感覺。
          </Typography>
          <Typography variant="body1" paragraph>
            我知道我現在在這個時間跟你在一起會讓你很分心，畢竟目前的夢想是考一個好的grad school，
            我知道你可以做到，不管在哪裡我都會好好的去回你的消息，你也知道我是一個看到消息一定會秒回的人，
            所以你也不用擔心，我會等你的，如果我可以跟你去當然是最好，找一個remote的工作感覺也不錯。
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
