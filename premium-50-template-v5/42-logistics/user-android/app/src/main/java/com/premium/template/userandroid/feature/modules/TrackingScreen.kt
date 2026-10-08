package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun TrackingScreen(onCreate:()->Unit){Card{Column{Text("Tracking");Text("Domain-specific tracking workflow");Button(onClick=onCreate){Text("Create")}}}}
