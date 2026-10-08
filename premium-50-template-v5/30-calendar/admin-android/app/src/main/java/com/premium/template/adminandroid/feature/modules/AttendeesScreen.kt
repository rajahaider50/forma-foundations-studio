package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AttendeesScreen(onCreate:()->Unit){Card{Column{Text("Attendees");Text("Domain-specific attendees workflow");Button(onClick=onCreate){Text("Create")}}}}
