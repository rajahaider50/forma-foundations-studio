package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ApplicationsScreen(onCreate:()->Unit){Card{Column{Text("Applications");Text("Domain-specific applications workflow");Button(onClick=onCreate){Text("Create")}}}}
