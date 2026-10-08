package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun MessagesScreen(onCreate:()->Unit){Card{Column{Text("Messages");Text("Domain-specific messages workflow");Button(onClick=onCreate){Text("Create")}}}}
