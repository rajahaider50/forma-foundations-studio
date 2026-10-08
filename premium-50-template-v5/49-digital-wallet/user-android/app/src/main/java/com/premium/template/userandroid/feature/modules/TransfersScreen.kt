package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun TransfersScreen(onCreate:()->Unit){Card{Column{Text("Transfers");Text("Domain-specific transfers workflow");Button(onClick=onCreate){Text("Create")}}}}
