package com.premium.template.adminandroid.admin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel

class MainActivity:ComponentActivity(){override fun onCreate(s:Bundle?){super.onCreate(s);setContent{PremiumApp()}}}
@Composable fun PremiumApp(vm:AppViewModel=viewModel()){
 val tabs=listOf("Home","Activity","Search","Profile");val icons=listOf(Icons.Default.Home,Icons.Default.Notifications,Icons.Default.Search,Icons.Default.Person)
 Scaffold(containerColor=Color(0xFF050509),bottomBar={NavigationBar(containerColor=Color(0xFF0B0B12)){tabs.forEachIndexed{i,label->NavigationBarItem(selected=vm.tab==i,onClick={vm.tab=i},icon={Icon(icons[i],label)},label={Text(label)})}}}){
  Column(Modifier.fillMaxSize().background(Brush.verticalGradient(listOf(Color(0xFF0A0912),Color(0xFF050509)))).padding(20.dp)){
   Text("Booking Platform Admin",style=MaterialTheme.typography.headlineLarge,color=Color.White)
   Text("Premium native workspace",color=Color.White.copy(alpha=.55f),modifier=Modifier.padding(top=6.dp,bottom=18.dp))
   OutlinedTextField(value=vm.query,onValueChange={vm.query=it},singleLine=true,label={Text("Search")},modifier=Modifier.fillMaxWidth(),leadingIcon={Icon(Icons.Default.Search,null)})
   Spacer(Modifier.height(16.dp))
   LazyColumn(verticalArrangement=Arrangement.spacedBy(12.dp)){items(vm.items.filter{it.contains(vm.query,true)}){item->
    Surface(color=Color.White.copy(alpha=.055f),shape=RoundedCornerShape(24.dp),modifier=Modifier.fillMaxWidth()){
     Row(Modifier.padding(18.dp)){
      Column(Modifier.weight(1f)){Text(item.replaceFirstChar{it.uppercase()},color=Color.White,style=MaterialTheme.typography.titleMedium);Text("Ready • API boundary included",color=Color.White.copy(alpha=.45f),style=MaterialTheme.typography.bodySmall)}
      Icon(Icons.Default.ChevronRight,null,tint=Color.White.copy(alpha=.5f))
     }
    }
   }}
  }
 }
}
class AppViewModel:androidx.lifecycle.ViewModel(){var tab by mutableIntStateOf(0);var query by mutableStateOf("");val items=mutableStateListOf("dashboard","workspace","analytics","notifications","settings")}