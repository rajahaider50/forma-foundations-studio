package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun RoomsScreen(onCreate:()->Unit){Card{Column{Text("Rooms");Text("Domain-specific rooms workflow");Button(onClick=onCreate){Text("Create")}}}}
