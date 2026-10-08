package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun RemindersScreen(onCreate:()->Unit){Card{Column{Text("Reminders");Text("Domain-specific reminders workflow");Button(onClick=onCreate){Text("Create")}}}}
