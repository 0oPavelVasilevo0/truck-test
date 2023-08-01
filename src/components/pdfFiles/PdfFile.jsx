import React from 'react';
import { Page,Text, Image, Document, View, StyleSheet } from '@react-pdf/renderer';
import Photo from '../pdfFiles/7647_2.png';
// import { FaFigma } from 'react-icons/fa';

// Font.register({
//     family:'',
//     src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
// });
const styles = StyleSheet.create({
     page: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingHorizontal: 0,
        backgroundColor: 'white'
     },
    //  header: {
    //     // paddingTop: 10,
    //     // paddingBottom: 10,
    //     // paddingHorizontal: 10,
    //     width: '100%',
    //     height:280,
    //     // backgroundColor: 'white',
    //     // borderBottom: '2 solid blue'
    //     // display: 'inline-block'
    //  },

        //  image_block: {
    
        // marginVertical: 5,
        // marginHorizontal: 5,
    
        // height: 142,
        // width: 142,
        // alignItems: 'center',
        // border: '2 solid white'
        //  },

       header_text: {
        //    display: 'inline-block',
           width: '100%',
           textAlign:'center'
       },

     h1: {
        fontSize: 40,
        fontWeight: 'extrabold',
        textAlign:'center',
        color:'white'
        

     },
     p: {
        paddingTop:20,
       
        
     },
     p_1: {
    borderLeft: '1px solid black',
    marginVertical: 20,
    paddingHorizontal:10
     },
    // page: {
    //     flexDirection: 'row',
    //     backgroundColor: '#E4E4E4'
    // },
    section_1: {
        margin: 0,
        padding: 10,
        // flexGrow: 1,
        width: '34%',
        height: '100%',
        backgroundColor: '#C0C0C0',
        // display:'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        position:'absolute', 
        left: 0,
        top: 0,
        // borderBottom: '1 solid black',
        borderRight: '0.5 solid black'
       
    },
    section_2: {
        margin: 0,
        padding: 10,
        // flexGrow: 1,
        width: '66%',
        height: '20%',
        backgroundColor: '#8A2BE2',
        // display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        position:'absolute',
        right: 0,
        top: 0,
        // borderBottom: '1 solid black',
        borderLeft: '0.5 solid black'

    },
    section_3: {
        margin: 0,
        padding: 10,
        // flexGrow: 1,
        width: '66%',
        height: '80%',
        backgroundColor: 'white',
        // display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderTop: '1 solid black',
        borderLeft: '0.5 solid black'

    },
    image: {
        marginVertical: 5,
        marginLeft: 20,
        borderRadius: '50%',
        // height: 'auto',
        // size: 5,
        height: 140,
        width: 140,
        alignItems:'center',
        // justifyContent:'center',
        // display: 'flexbox'
        border:'1 solid white',
        objectFit:'fill'
        
    }
});


const PdfFile = () => {
  return (
      <Document>
          <Page size="A4" style={styles.page}>
              {/* <View style={styles.header}> */}
                 
                 
                  <View style={styles.section_1}>

                      {/* <View style={styles.image_block}> */}
                          <Image style={styles.image} src={Photo} />
                      {/* </View> */}
                  </View>
                  <View style={styles.section_2}>
                      <Text style={styles.h1}>Ivchenko Evgeniia</Text>
                      <View style={styles.header_text}>
                          {/* <Text style={styles.h1}>Ivchenko Evgeniia</Text> */}
                          <Text style={styles.p}>i am a UX/UI designer</Text>
                      </View>
                  </View >
                 <View style={styles.section_3}>
                  <Text style={styles.p_1}>i am a UX/UI designer</Text>
                  <Text></Text>

                    
                  </View>
                 
              {/* </View> */}
             
              
          </Page>
      </Document>
  )
}

export default PdfFile