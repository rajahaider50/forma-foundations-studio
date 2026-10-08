package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ShowsScreen(onCreate:()->Unit){Card{Column{Text("Shows");Text("Domain-specific shows workflow");Button(onClick=onCreate){Text("Create")}}}}
