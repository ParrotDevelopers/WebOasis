var colors=[[44,145,223],[110,233,133],[110,233,225],[255,213,0],[255,0,86],[213,0,255]],step=0,colorIndices=[0,1,2,3],gradientSpeed=.004;function updateGradient(){var a=colors[colorIndices[0]],b=colors[colorIndices[1]],c=colors[colorIndices[2]],d=colors[colorIndices[3]],e=1-step,i="#"+(Math.round(e*a[0]+step*b[0])<<16|Math.round(e*a[1]+step*b[1])<<8|Math.round(e*a[2]+step*b[2])).toString(16),m="#"+(Math.round(e*c[0]+step*d[0])<<16|Math.round(e*c[1]+step*d[1])<<8|Math.round(e*c[2]+step*d[2])).toString(16);document.getElementById("canvasContainer").style.background="linear-gradient("+i+","+m+") no-repeat",1<=(step+=gradientSpeed)&&(step%=1,colorIndices[0]=colorIndices[1],colorIndices[2]=colorIndices[3],colorIndices[1]=(colorIndices[1]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length,colorIndices[3]=(colorIndices[3]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length)}setInterval(updateGradient,10);