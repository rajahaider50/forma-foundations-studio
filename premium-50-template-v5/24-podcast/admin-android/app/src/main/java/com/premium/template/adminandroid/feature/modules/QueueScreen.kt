package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun QueueScreen(onCreate:()->Unit){Card{Column{Text("Queue");Text("Domain-specific queue workflow");Button(onClick=onCreate){Text("Create")}}}}
