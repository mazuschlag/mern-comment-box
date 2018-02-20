//style.js
const style = {
	homePage: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}, 

	homePageForm: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},

	homePageText: {
 		maxWidth:'10em',
 		margin:'3px',
 		padding:'0 10px',
 		height:'40px',
 		borderRadius:'3px'
	},

	homePagePost: {
		maxWidth:'75px',
 		height:'40px',
 		margin:'5px 3px',
 		fontSize:'1rem',
 		backgroundColor:'#58A4FB',
 		borderRadius:'3px',
 		color:'#fff',
 		textTransform:'uppercase',
 		letterSpacing:'.055rem',
 		border:'none'
	},

	commentBox: {
		width:'80vw',
 		margin:'0 auto',
 		fontFamily:'Helvetica, sans-serif'
 	},
 	
 	title: {
 		textAlign:'center',
 		textTransform:'uppercase'
 	},
 	
 	commentList: {
 		border:'1px solid #f1f1f1',
 		padding:'0 12px',
 		maxHeight:'70vh',
 		overflow:'scroll'
 	},
 	
 	comment: {
 		backgroundColor:'#fafafa',
 		margin:'10px',
 		padding:'3px 10px',
 		fontSize:'.85rem'
 	},
 	
 	commentForm: {
 		margin:'10px',
 		display:'flex',
 		flexFlow:'row wrap',
 		justifyContent:'space-between'
 	},
 	
 	commentFormText: {
 		flex:'1',
 		minWidth:'400px',
 		margin:'3px',
 		padding:'0 10px',
 		height:'40px',
 		borderRadius:'3px'
 	},
 	
 	commentFormPost: {
 		maxWidth:'75px',
 		flex:'1',
 		height:'40px',
 		margin:'5px 3px',
 		fontSize:'1rem',
 		backgroundColor:'#58A4FB',
 		borderRadius:'3px',
 		color:'#fff',
 		textTransform:'uppercase',
 		letterSpacing:'.055rem',
 		border:'none'
 	},
 	
}

module.exports = style;
