import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaContainer, } from '../../utils/screen/SafeArea'
import { Content } from '../../utils/screen/Page'
import { Avatar, WrapperHeader, TextWrapper,TitleContent, WrapperFound} from './Home.styles'
import TextValue from './Header/TextValue'
import Tag from './Tag/Tag'
import { Line } from '../../theme/globalStyles'
import { CardChat } from '../../components/CardChart/CardChart'
export interface PropsHome {
   navigation
}



const Home: React.FC<PropsHome> = ({ navigation }) => {

   return (
      <>
         <SafeAreaContainer>
            <Content>
               <WrapperHeader>
                  <Avatar>
                     <Image
                        style={{ width: 16, height: 21 }}
                        source={require('../../assets/User.png')}
                     />
                  </Avatar>
                  <TextWrapper>Account: $1,457.23</TextWrapper>
                  <View>
                     <Image
                        style={{ width: 16, height: 21 }}
                        source={require('../../assets/Bell.png')}
                     />
                  </View>
               </WrapperHeader>
               <WrapperHeader>
                  <TextValue
                     titlePercent={'32%'}
                     labelWrapper={'Portfolio'}
                     titleWrapper={'$1,245.23'} />
                  <Tag textTag='Earn Rewards' />
               </WrapperHeader>
               <Line/>
               <WrapperFound>
                 <TitleContent>Found</TitleContent>
                 <CardChat
                 titleCard={'Wind'}
                 current={'$900'}
                 percent={'34%'}
                 nameIcon={'sun'}
                 />
               </WrapperFound>
            </Content>
            
         </SafeAreaContainer>
      </>
   )
}

export default Home