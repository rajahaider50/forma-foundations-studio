package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun EventsScreen(onCreate:()->Unit){Card{Column{Text("Events");Text("Domain-specific events workflow");Button(onClick=onCreate){Text("Create")}}}}
