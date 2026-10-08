package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun RoomsScreen(onCreate:()->Unit){Card{Column{Text("Rooms");Text("Domain-specific rooms workflow");Button(onClick=onCreate){Text("Create")}}}}
