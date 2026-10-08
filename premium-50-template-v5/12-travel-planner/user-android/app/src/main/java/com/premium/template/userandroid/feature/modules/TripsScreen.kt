package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun TripsScreen(onCreate:()->Unit){Card{Column{Text("Trips");Text("Domain-specific trips workflow");Button(onClick=onCreate){Text("Create")}}}}
