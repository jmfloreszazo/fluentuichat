import { Flex } from '@fluentui/react-northstar';
import { Chat } from '@fluentui/react-northstar'
import { Button, SendIcon } from '@fluentui/react-northstar';
import { TextArea } from '@fluentui/react-northstar';
import React from 'react'


function App() {

  const Guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            const r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        },
    );
  };
  
  const handleChangeText = (data, value) => {
    setmessage(value?.value ?? '');
  };
  
  const handleClick = () => {
    try {
        const guid = Guid();
        const tempData = data;
        tempData.push({
            message: (
              <Chat.Message content={message} author="Test" timestamp="Today, 22:00 PM" mine />
            ),
            contentPosition: 'end',
            key: guid,
        });
        setmessage('');
        setdata(tempData);
        console.log('tempData',tempData)
    } catch (e) {
        console.log(e);
    }
  };

  const [message, setmessage] =  React.useState('');
  const [data, setdata] =  React.useState([]);

  return (
    <div className="App">
        <Flex wrap>
            <div
                style={{
                    width: '100%',
                    height: '80%',
                }}
            >
              <Chat items={data} />
            </div>
            <div
                style={{
                    width: '100%',
                    height: '20%',
                }}
            >
            <Flex wrap>
                <div style={{width: '95%'}}>
                    <TextArea
                        value={message}
                        onChange={handleChangeText}
                        fluid
                        maxLength={150}
                        styles={({theme: {siteVariables}}) => ({
                            backgroundColor:
                                siteVariables.colorScheme.default.background1,
                        })}
                    />
                </div>
                <div style={{width: '5%'}}>
                    <Button
                        onClick={handleClick}
                        icon={<SendIcon />}
                        text
                        iconOnly
                        title="Send"
                    />
                </div>
            </Flex>              
            </div>
        </Flex>
    </div>
  );
}

export default App;
