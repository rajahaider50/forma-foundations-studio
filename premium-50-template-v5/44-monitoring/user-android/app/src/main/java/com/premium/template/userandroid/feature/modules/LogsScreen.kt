package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun LogsScreen(onCreate:()->Unit){Card{Column{Text("Logs");Text("Domain-specific logs workflow");Button(onClick=onCreate){Text("Create")}}}}
