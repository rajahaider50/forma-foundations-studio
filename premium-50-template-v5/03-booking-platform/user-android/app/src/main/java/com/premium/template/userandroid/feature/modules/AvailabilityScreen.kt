package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AvailabilityScreen(onCreate:()->Unit){Card{Column{Text("Availability");Text("Domain-specific availability workflow");Button(onClick=onCreate){Text("Create")}}}}
